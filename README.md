[English](./README_EN.md) | 中文

---

# Agent Bridge

> Agent 间通信桥梁 — 支持 MCP、A2A 和 HTTP 协议

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Erich956389473/agent-bridge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 功能特性

- **多协议支持** — MCP、A2A、HTTP
- **Agent 互联** — 实现 Agent 间通信
- **消息转发** — 智能路由和转发
- **状态同步** — 实时同步 Agent 状态

## 🚀 快速开始

### 安装

`ash
npm install -g agent-bridge
`

### 使用

`ash
# 启动桥接服务
agent-bridge start

# 配置 Agent 连接
agent-bridge config

# 查看状态
agent-bridge status
`

## 📖 支持的协议

| 协议 | 说明 | 用途 |
|------|------|------|
| MCP | Model Context Protocol | Claude Code 等工具 |
| A2A | Agent-to-Agent | Agent 间直接通信 |
| HTTP | REST API | 通用 HTTP 接口 |

## 📦 技术栈

- **语言:** JavaScript
- **运行时:** Node.js
- **协议:** MCP, A2A, HTTP
- **License:** MIT

## 📄 License

MIT License - 详见 [LICENSE](LICENSE)

---

**Author:** Erich Lee | [GitHub](https://github.com/Erich956389473)
