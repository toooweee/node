const fs = require("fs/promises");
const path = require("path");
const os = require("node:os");

const filePath = path.join(__dirname);

const firstTask = async (path) => {
  const files = await fs.readdir(path);

  const data = {
    F: [],
    D: [],
  };

  files.forEach((file) => {
    if (file.split(".")[1]) {
      data.F.push(file);
    } else {
      data.D.push(file);
    }
  });

  return data;
};

// firstTask(filePath).then((data) => console.log(data));

secondTask = async (filePath) => {
  const files = await fs.readdir(filePath);

  const txtFiles = files.filter((file) => file.includes(".txt"));

  if (txtFiles.length < 1) {
    console.log(`No txt file found in ${filePath}`);
    return;
  }

  const newFilePath = path.join(__dirname, "second.txt");

  for (const file of txtFiles) {
    const fileContent = await fs.readFile(file);
    await fs.appendFile(newFilePath, fileContent);
  }

  return newFilePath;
};

// secondTask(filePath).then((data) => console.log(data));

const thirdTask = async (filePath) => {
  const files = (await fs.readdir(filePath)).filter((file) =>
    file.includes("."),
  );

  for (const file of files) {
    const pathToRename = path.join(filePath, file);
    if (file.includes(".png" || ".jpg" || ".jpeg" || ".webp")) {
      const targetDir = path.join(filePath, "images");
      await fs.mkdir(targetDir, {
        recursive: true,
      });
      await fs.rename(pathToRename, path.join(targetDir, file));
    } else if (
      file.includes(
        ".doc" || ".docx" || ".xls" || ".xlsx" || ".pdf" || ".ppt" || "pptx",
      )
    ) {
      const targetDir = path.join(filePath, "documents");
      await fs.mkdir(targetDir, {
        recursive: true,
      });
      await fs.rename(pathToRename, path.join(targetDir, file));
    } else if (file.includes(".zip" || ".rar")) {
      const targetDir = path.join(filePath, "archives");
      await fs.mkdir(targetDir, {
        recursive: true,
      });
      await fs.rename(pathToRename, path.join(targetDir, file));
    } else {
      const targetDir = path.join(filePath, "others");
      await fs.mkdir(targetDir, {
        recursive: true,
      });
      await fs.rename(pathToRename, path.join(targetDir, file));
    }
  }
};

// thirdTask(path.join(os.homedir(), "Downloads", "test")).then(() => {
//   console.log("File sorting finished succefully");
// });

class Logger {
  constructor() {
    const loggerDirectory = path.join(__dirname, "log");

    fs.mkdir(loggerDirectory, { recursive: true }).then(() => {
      this.logFile = path.join(loggerDirectory, "logs.txt");
      console.log(this.logFile);
      fs.appendFile(this.logFile, " ").then(() => {
        console.log("Logger is ready for work");
      });
    });
  }

  async log(message) {
    await fs.appendFile(this.logFile, message);
  }

  async getLogs() {
    return await fs.readFile(this.logFile);
  }
}

async function testLogger() {
  const logger = new Logger();

  await logger.log("Some 1 is been created");
  await logger.log("Some 2 is been created");
  await logger.log("Some 3 is been created");
  await logger.log("Some 4 is been created");

  console.log(await logger.getLogs());
}

testLogger();

os.EOL; // ЭТО ПЕРЕНОС СТРОКИ
