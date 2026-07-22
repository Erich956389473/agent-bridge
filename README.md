[English](./README_EN.md) | 中文

---

# Agent Bridge

> Bridge for Agent-to-Agent c ommunication across different protocols.
> Ag ent 间通信桥接工具，支持多种协� �。

[![CI](https://github.com/Erich95638947 3/agent-bridge/actions/workflows/ci.yml/badge .svg)](https://github.com/Erich956389473/agen t-bridge/actions/workflows/ci.yml)
[![License : MIT](https://img.shields.io/badge/License-M IT-blue.svg)](LICENSE)
[![npm version](https: //img.shields.io/npm/v/@erichlee/agent-bridge )](https://www.npmjs.com/package/@erichlee/ag ent-bridge)

A unified communication bridge t hat allows Agents using different protocols ( MCP, A2A, HTTP, WebSocket) to communicate wit h each other.

一个统一的通信桥接工 具，允许使用不同协议（MCP、A2A、 HTTP、WebSocket）的 Agent 相互通信。
 
---

## Quick Start | 快速开始

```bash
 # Install globally
npm install -g agent-bridg e

# Start bridge server
agent-bridge start

 # Or use as library
const { Bridge } = requir e('agent-bridge');
const bridge = new Bridge( );
```

---

## Features | 功能

- **Multi- protocol support** — MCP, A2A, HTTP, WebSoc ket
- **Unified message format** — consiste nt interface across protocols
- **Protocol ad apters** — plug-and-play adapter architectu re
- **Message routing** — intelligent rout ing based on destination
- **Configuration ma nagement** — YAML/JSON config files
- **Bil ingual (EN/ZH)** — switch language with `-- lang`

---

## Architecture | 架构

```
┌ ─────────────┐     ┌─────────────� �    ┌────────────� ��┐
│  MCP Agent  │◄──►│              │◄──►│  A2A Agent  │
� �─────────────┘     │  Agent      │    └─────� �───────┘
                    │  Bridge     │
┌───────� ��─────┐    │             │     ┌─────────────� ��
│ HTTP Agent  │◄──►│              │◄──►│WS Agent     │
└� �────────────┘    � ��─────────────┘     └───────────── ┘
```

---

## Supported Protocols | 支持 的协议

| Protocol | Adapter | Status |
|- ---------|---------|--------|
| MCP | `McpAda pter` | ✅ Ready |
| A2A | `A2aAdapter` | � � Ready |
| HTTP | `HttpAdapter` | 🚧 Plann ed |
| WebSocket | `WsAdapter` | 🚧 Planned  |

---

## Usage Examples | 使用示例

## # Basic Bridge Usage

```javascript
const { B ridge } = require('agent-bridge');

const bri dge = new Bridge();

// Register adapters
bri dge.registerAdapter('mcp', new McpAdapter()); 
bridge.registerAdapter('a2a', new A2aAdapter ());

// Send message
await bridge.send({
  t o: 'mcp:server1',
  content: 'Hello from MCP  agent'
});
```

### CLI Usage

```bash
# Star t bridge with config
agent-bridge start --con fig bridge.yaml

# Send test message
agent-br idge send --to "a2a:agent1" --message "Hello" 

# List supported protocols
agent-bridge pro tocols
```

---

## License

MIT 