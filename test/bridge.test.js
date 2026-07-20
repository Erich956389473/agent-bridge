const { Bridge } = require('../src/bridge');

describe('Bridge', () => {
  let bridge;
  
  beforeEach(() => {
    bridge = new Bridge();
  });
  
  test('should create a bridge instance', () => {
    expect(bridge).toBeInstanceOf(Bridge);
  });
  
  test('should have empty adapters by default', () => {
    expect(bridge.adapters).toEqual({});
  });
  
  test('should register an adapter', () => {
    const mockAdapter = { name: 'test-adapter', send: jest.fn() };
    bridge.registerAdapter('test', mockAdapter);
    expect(bridge.adapters['test']).toBe(mockAdapter);
  });
  
  test('should throw error when registering duplicate adapter', () => {
    const mockAdapter = { name: 'test-adapter', send: jest.fn() };
    bridge.registerAdapter('test', mockAdapter);
    expect(() => bridge.registerAdapter('test', mockAdapter)).toThrow('Adapter already registered');
  });
  
  test('should send message through correct adapter', async () => {
    const mockAdapter = {
      name: 'test-adapter',
      send: jest.fn().mockResolvedValue({ success: true })
    };
    bridge.registerAdapter('test', mockAdapter);
    
    const message = { to: 'test:agent1', content: 'hello' };
    const result = await bridge.send(message);
    
    expect(mockAdapter.send).toHaveBeenCalledWith(message);
    expect(result).toEqual({ success: true });
  });
  
  test('should throw error when sending to unknown adapter', async () => {
    const message = { to: 'unknown:agent1', content: 'hello' };
    await expect(bridge.send(message)).rejects.toThrow('No adapter found');
  });
  
  test('should parse destination correctly', () => {
    const destination = bridge.parseDestination('mcp:server1');
    expect(destination).toEqual({ protocol: 'mcp', target: 'server1' });
  });
  
  test('should handle different protocols', async () => {
    const mcpAdapter = {
      name: 'mcp-adapter',
      send: jest.fn().mockResolvedValue({ protocol: 'mcp' })
    };
    const a2aAdapter = {
      name: 'a2a-adapter', 
      send: jest.fn().mockResolvedValue({ protocol: 'a2a' })
    };
    
    bridge.registerAdapter('mcp', mcpAdapter);
    bridge.registerAdapter('a2a', a2aAdapter);
    
    const mcpMessage = { to: 'mcp:server1', content: 'hello' };
    const a2aMessage = { to: 'a2a:agent1', content: 'hello' };
    
    await bridge.send(mcpMessage);
    await bridge.send(a2aMessage);
    
    expect(mcpAdapter.send).toHaveBeenCalledWith(mcpMessage);
    expect(a2aAdapter.send).toHaveBeenCalledWith(a2aMessage);
  });
});