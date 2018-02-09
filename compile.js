const solc = require('solc');
const path = require('path');
const fs = require('fs');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

const compileResult = solc.compile(source, 1);
console.log(compileResult);
module.exports = compileResult.contracts[':Lottery'];
