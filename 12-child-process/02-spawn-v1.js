#!/usr/bin/node

const cp = require('child_process');

const cmd = cp.spawn('cat',['01-exec-file.js']);

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
