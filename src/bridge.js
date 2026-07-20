class Bridge {
  constructor() {
    this.adapters = {};
  }
  
  registerAdapter(protocol, adapter) {
    if (this.adapters[protocol]) {
      throw new Error('Adapter already registered');
    }
    this.adapters[protocol] = adapter;
  }
  
  parseDestination(destination) {
    const [protocol, ...rest] = destination.split(':');
    const target = rest.join(':');
    return { protocol, target };
  }
  
  async send(message) {
    const { protocol, target } = this.parseDestination(message.to);
    const adapter = this.adapters[protocol];
    
    if (!adapter) {
      throw new Error(`No adapter found for protocol: ${protocol}`);
    }
    
    // 直接传递原始消息给适配器
    return await adapter.send(message);
  }
  
  // 获取所有已注册的协议
  getSupportedProtocols() {
    return Object.keys(this.adapters);
  }
  
  // 移除适配器
  removeAdapter(protocol) {
    if (this.adapters[protocol]) {
      delete this.adapters[protocol];
      return true;
    }
    return false;
  }
}

module.exports = { Bridge };