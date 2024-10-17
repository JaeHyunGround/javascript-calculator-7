import readline from "readline";

class App {
  async run() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const input = await new Promise((resolve) => {
      console.log("덧셈할 문자열을 입력해주세요.");
      rl.on("line", (line) => {
        resolve(line);
        rl.close();
      });
    });

    console.log(`결과 : ${input}`);
  }
}

export default App;
