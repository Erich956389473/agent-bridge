const strings = {
  en: {
    cliDescription: 'Bridge for Agent-to-Agent communication across different protocols',
    startDescription: 'Start bridge server',
    sendDescription: 'Send a test message',
    protocolsDescription: 'List supported protocols',
    portOption: 'Port to listen on',
    configOption: 'Config file path',
    toOption: 'Destination (protocol:target)',
    messageOption: 'Message content',
    startingServer: 'Starting Agent Bridge on port {port}',
    sendingMessage: 'Sending message to {to}: {message}',
    supportedProtocols: 'Supported protocols:',
    mcpProtocol: 'MCP (Model Context Protocol)',
    a2aProtocol: 'A2A (Agent-to-Agent Protocol)',
    httpProtocol: 'HTTP (REST API)',
    wsProtocol: 'WebSocket'
  },
  zh: {
    cliDescription: 'Agent 间通信桥接工具，支持多种协议',
    startDescription: '启动桥接服务器',
    sendDescription: '发送测试消息',
    protocolsDescription: '列出支持的协议',
    portOption: '监听端口',
    configOption: '配置文件路径',
    toOption: '目标（协议:目标）',
    messageOption: '消息内容',
    startingServer: '正在端口 {port} 启动 Agent Bridge',
    sendingMessage: '正在发送消息到 {to}: {message}',
    supportedProtocols: '支持的协议：',
    mcpProtocol: 'MCP（模型上下文协议）',
    a2aProtocol: 'A2A（Agent间协议）',
    httpProtocol: 'HTTP（REST API）',
    wsProtocol: 'WebSocket'
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (strings[lang]) {
    currentLang = lang;
  }
}

function t(key, replacements = {}) {
  let str = strings[currentLang][key] || strings.en[key] || key;
  Object.entries(replacements).forEach(([k, v]) => {
    str = str.replace(`{${k}}`, v);
  });
  return str;
}

module.exports = { t, setLanguage };