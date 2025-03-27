import * as readline from "readline";
import Greeting  from "./greeting";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("언어 코드를 입력하세요 (ko, en, jp): ", (input) => {
  new Greeting(input);
  rl.close();
});