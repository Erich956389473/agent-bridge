# Agent Bridge

> Bridge for Agent-to-Agent communication across different protocols.
> Agent 间通信桥接工具，支持多种协议。

A unified communication bridge that allows Agents using different protocols (MCP, A2A, HTTP, WebSocket) to communicate with each other.

一个统一的通信桥接工具，允许使用不同协议（MCP、A2A、HTTP、WebSocket）的 Agent 相互通信。

---

## Quick Start | 快速开始

```bash
# Install globally
npm install -g agent-bridge

# Start bridge server
agent-bridge start

# Or use as library
const { Bridge } = require('agent-bridge');
const bridge = new Bridge();
```

---

## Features | 功能

- **Multi-protocol support** — MCP, A2A, HTTP, WebSocket
- **Unified message format** — consistent interface across protocols
- **Protocol adapters** — plug-and-play adapter architecture
- **Message routing** — intelligent routing based on destination
- **Configuration management** — YAML/JSON config files
- **Bilingual (EN/ZH)** — switch language with `--lang`

---

## Architecture | 架构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  MCP Agent  │◄──►│             │◄──►│  A2A Agent  │
└─────────────┘    │  Agent      │    └─────────────┘
                   │  Bridge     │
┌─────────────┐    │             │    ┌─────────────┐
│ HTTP Agent  │◄──►│             │◄──►│WS Agent     │
└─────────────┘    └─────────────┘    └─────────────┘
```

---

## Supported Protocols | 支持的协议

| Protocol | Adapter | Status |
|----------|---------|--------|
| MCP | `McpAdapter` | ✅ Ready |
| A2A | `A2aAdapter` | ✅ Ready |
| HTTP | `HttpAdapter` | 🚧 Planned |
| WebSocket | `WsAdapter` | 🚧 Planned |

---

## Usage Examples | 使用示例

### Basic Bridge Usage

```javascript
const { Bridge } = require('agent-bridge');

const bridge = new Bridge();

// Register adapters
bridge.registerAdapter('mcp', new McpAdapter());
bridge.registerAdapter('a2a', new A2aAdapter());

// Send message
await bridge.send({
  to: 'mcp:server1',
  content: 'Hello from MCP agent'
});
```

### CLI Usage

```bash
# Start bridge with config
agent-bridge start --config bridge.yaml

# Send test message
agent-bridge send --to "a2a:agent1" --message "Hello"

# List supported protocols
agent-bridge protocols
```

---

## License

MIT