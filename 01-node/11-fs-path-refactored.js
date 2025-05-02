const fs = require("fs/promises");
const path = require("path");
const os = require("node:os");

const filePath = path.join(__dirname);

const firstTask = async (dirPath) => {
  try {
    const items = await fs.readdir(dirPath);
    const detailedItems = {
      F: [],
      D: [],
      E: [],
    };

    for (const item of items) {
      const itemPath = path.join(dirPath, item);

      try {
        const stats = await fs.stat(itemPath);

        if (stats.isFile()) {
          detailedItems.F.push(item);
        } else if (stats.isDirectory()) {
          detailedItems.D.push(item);
        }
      } catch (e) {
        console.log(`Не удалось получить информацию для ${item}`, e.message);
        detailedItems.E.push(item);
      }
    }

    return detailedItems;
  } catch (err) {
    console.log(`Ошибка чтения директории ${dirPath}`, err.message);
    return `Не удалось прочитать директорию ${dirPath}`;
  }
};

// firstTask(filePath).then((result) => console.log(result));

const secondTask = async (dirPath, outputFileName = "combinedText.txt") => {
  const outputFilePath = path.join(dirPath, outputFileName);
  let filesCombined = 0;

  try {
    const files = await fs.readdir(dirPath);
    const txtFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === "txt",
    );

    if (txtFiles.length < 1) {
      console.log(`В директории ${dirPath} не найдено .txt файлов.`);
      return null;
    }

    await fs.writeFile(outputFilePath, "");

    for (const file of txtFiles) {
      const inputFilePath = path.join(dirPath, file);

      try {
        const fileContent = await fs.readFile(inputFilePath);
        await fs.appendFile(outputFilePath, fileContent);
        await fs.appendFile(outputFilePath, os.EOL);
        filesCombined++;
      } catch (readAppendError) {
        console.error(
          `Ошибка при обработке файла ${inputFilePath}:`,
          readAppendError.message,
        );
      }
    }

    console.log(
      `Успешно объединено ${filesCombined} файлов в ${outputFilePath}`,
    );
    return { path: outputFilePath, count: filesCombined };
  } catch (e) {
    console.error(
      `Ошибка при выполнении задачи в директории ${dirPath}:`,
      e.message,
    );
    return null;
  }
};
