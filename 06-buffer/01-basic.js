#!/usr/bin/node

const log =  console.log;

//实例化一个 buffer 对象 buf1，缓冲区的大小是 256 字节，初始化第一个字节为零
var buf1 = new Buffer(256);
buf1[0] = 0;

//控制台打印 buf1 的长度和内容
log('buf1 length:',buf1.length);
log('\nbuf1:',buf1);

//通过循环初始化 buf1 的每个字节，每个字节比上个字节大 1，控制台打印 buf1 的内容
for(var i=0; i<buf1.length; i++) buf1[i] = i;
log('\nbuf1:',buf1);

//对 buf1 做切片操作，取出后 10 个字节，存放到 buf2 中，控制台打印 buf2 的内容和长度
var buf2 = buf1.slice(246,256);
log('\nbuf2:',buf2);
log('\nbuf2 length:',buf2.length);

//在 buffer 中填充数据，buffer 数据转化成 JSON 数据
buf2.fill(0);
log('\nbuf2:',buf2);
log('\nbuf2\'s JSON:',buf2.toJSON());
log('\nbuf2\'s JSON:',JSON.stringify(buf2));

//用数组（数组内容随意）初始化 buf3，控制台打印 buf3 中的内容和长度
var array = ['a', 0xba, 0xdf, 0x00, 255, 10];
var buf3 = new Buffer(array);
log('\nbuf3:', buf3.length, buf3);

//用字符串（字符串内容随意）初始化 buf4，控制台打印 buf4 中的内容和长度，打印 buf4 字符串
var buf4 = new Buffer('hello world', 'utf8');
log('\nbuf4:', buf4.length, buf4);

//将 buf4 的内容复制到 buf3 中，打印复制后的 buf3 内容和长度，打印 buf3 字符串
buf4.copy(buf3, 0, 0, buf3.length);
log('\nbuf3:', buf3.length, buf3);

// UTF8 编码
var str = '你好 wangding';
var buf5 = new Buffer(str, 'utf8');
log('\nbuffer length:', buf5.length);
log('buffer content:', buf5);
log('string length:', str.length);

