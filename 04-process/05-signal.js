#!/usr/bin/node

console.log('process id:',process.pid);

process.stdin.resume();

process.on('SIGINT',() => {
  console.log('you pressed ctrl+c,good bye');
  process.exit();
});

process.on('SIGTSTP',() => {
  console.log('you pressed ctrl+z,stop running');
  process.exit();
});

