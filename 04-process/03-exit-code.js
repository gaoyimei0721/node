#!/usr/bin/node

var code = process.argv[2];

if(process.argv.length < 3){

  console.error('请给出命令行参数！');
  process.exit(1);
}

if(typeof code !== 'number'){
  console.error('命令行参数类型应该是数值类型！');
  process.exit(1);
}

process.exit(code);

/*
const log = console.log,
      err = console.error,
       arg = process.argv[2];

if(typeof(arg) === 'undefined' || isNaN(Number(arg))){
  err('命令行参数不正确');
  process.exit(1);
}else{
  log('退出码：',arg);
  process.exit(arg);
}
*/
