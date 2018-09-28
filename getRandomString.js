const argLength = parseInt(process.argv[2]);
let length = 10;

if(argLength > 0) {
  length = argLength;
}

// 生成する文字列に含める文字セット
const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charSetNum = charSet.length;
let result = '';
for(let i = 0; i < length; i++){
  result += charSet[Math.floor(Math.random() * charSetNum)];
}
console.log(result);
