#!/usr/bin/env node

const { Command } = require('commander');
const { Bridge } = require('../src/bridge');

const program = new Command();

program
  .name('agent-bridge')
  .description('Bridge for Agent-to-Agent communication across different protocols')
  .version('0.1.0');

program
  .command('start')
  .description('Start bridge server')
  .option('-p, --port <port>', 'Port to listen on', '3000')
  .option('-c, --config <config>', 'Config file path')
  .action((options) => {
    console.log(`Starting Agent Bridge on port ${options.port}`);
    // TODO: Implement server startup
  });

program
  .command('send')
  .description('Send a test message')
  .option('-t, --to <destination>', 'Destination (protocol:target)')
  .option('-m, --message <message>', 'Message content')
  .action((options) => {
    console.log(`Sending message to ${options.to}: ${options.message}`);
    // TODO: Implement message sending
  });

program
  .command('protocols')
  .description('List supported protocols')
  .action(() => {
    console.log('Supported protocols:');
    console.log('  - MCP (Model Context Protocol)');
    console.log('  - A2A (Agent-to-Agent Protocol)');
    console.log('  - HTTP (REST API)');
    console.log('  - WebSocket');
  });

program.parse();