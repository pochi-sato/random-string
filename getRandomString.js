const argLength = parseInt(process.argv[2]);
const argType = process.argv[3];
let length = 10;
let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

if(argLength > 0) {
  length = argLength;
}

if(argType === 'lower') {
  charSet = 'abcdefghijklmnopqrstuvwxyz0123456789';
} else if(argType === 'upper') {
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
} else if(argType === 'number') {
  charSet = '0123456789';
}

// 生成する文字列に含める文字セット
const charSetNum = charSet.length;
let result = '';
for(let i = 0; i < length; i++){
  result += charSet[Math.floor(Math.random() * charSetNum)];
}
console.log(result);
