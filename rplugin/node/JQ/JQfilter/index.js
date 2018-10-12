"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const {
  spawn
} = require('child-process-promise');

exports.default = plugin => async () => {
  let buffers = await plugin.nvim.buffers;
  let query_buffer;
  let json_buffer;
  let filtered_buffer;

  for (let buffer of buffers) {
    let name = await buffer.name;

    if (/\.jq$/.test(name)) {
      query_buffer = buffer;
    } else if (/\.filtered.json$/.test(name)) {
      filtered_buffer = buffer;
    } else if (/\.json$/.test(name)) {
      json_buffer = buffer;
    }
  }

  if (!filtered_buffer) {
    let name = (await json_buffer.name).replace('.json', '.filtered.json');
    await plugin.nvim.command('new ' + name);
    filtered_buffer = await plugin.nvim.buffer;
  }

  let filter = (await query_buffer.lines).join('');
  let job = spawn('jq', [filter], {
    capture: ['stdout', 'stderr']
  });
  let proc = job.childProcess;
  let lines = await json_buffer.lines;
  lines.forEach(l => proc.stdin.write(l));
  proc.stdin.end();
  let result = await job;
  filtered_buffer.setLines(result.stdout.split("\n"), {
    start: 0,
    end: -1
  });
};