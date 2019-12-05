// https://adventofcode.com/2019/day/1#part2

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  //   input: fs.createReadStream("./example1.txt"),
  input: fs.createReadStream("./day1.txt"),
  output: process.stdout
});

let total = 0;

rl.on("line", mass => {
  let lastVal = mass;
  let subtotal = 0;
  while (fuel(lastVal) > 0) {
    subtotal += fuel(lastVal);
    lastVal = fuel(lastVal);
  }
  total += subtotal;
});

function fuel(mass) {
  return Math.floor(mass / 3) - 2;
}

rl.on("close", () => {
  console.log({ total });
});
