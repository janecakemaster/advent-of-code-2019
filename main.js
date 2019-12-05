// https://adventofcode.com/2019/day/1#part2

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./example.txt"),
  // input: fs.createReadStream("./day2.txt"),
  output: process.stdout
});

rl.on("line", line => {
  const arr = line.split(",").map(n => parseInt(n, 10));
  let pos = 0;

  while (arr.length >= pos) {
    const op = arr[pos];
    if (op === 99) {
      break;
    }
    const a = arr[pos + 1];
    const b = arr[pos + 2];
    const storeVal = op === 1 ? arr[a] + arr[b] : arr[a] * arr[b];
    const storePos = arr[pos + 3];
    arr[storePos] = storeVal;
    pos += 4;
  }
});

rl.on("close", () => {
  console.log("done");
});
