const { Readable } = require("stream");

class CustomReadableStream extends Readable {
  constructor(options) {
    super(options);
    this.maxNumber = 10;
    this.generatedNumbers = 0;
  }

  _read() {
    if (this.generatedNumbers >= this.maxNumber) {
      this.push(null);
    } else {
      const randomNumber = Math.random();
      const buffer = Buffer.from(randomNumber.toString(), "utf-8");
      this.push(buffer);
      this.generatedNumbers += 1;
    }
  }
}

const randomNumberStream = new CustomReadableStream();
randomNumberStream.on("data", (chunk) => {
  console.log("New chunk received: ", chunk);
});
randomNumberStream.on("end", () => {
  console.log("Finished");
});
randomNumberStream.on("error", (err) => {
  console.log(err.stack);
});
