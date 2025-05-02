const os = require("os");

// const systemInfo = {
//   type: `Тип операционной системы: ${os.type()}`,
//   platform: `Платформа: ${os.platform()}`,
//   architecture: `Архитектура: ${os.arch()}`,
//   ozu: `Общий ОЗУ: ${os.totalmem()}`,
//   freeOzu: `Свободный ОЗУ: ${os.freemem()}`,
//   proc: `Модель и частота процессора: ${os.cpus().length}`,
// };
//
// console.log(systemInfo);

// const user = os.userInfo().username;
// const homeDir = os.homedir();
//
// console.log(
//   `Привет ${user}! Твоя домашняя директория находится здесь: ${homeDir}`,
// );

// const currentOs = os.platform();
//
// switch (currentOs) {
//   case "win32":
//     console.log("Это Windows! Будь осторожен с путями к файлам");
//     break;
//   case "linux":
//     console.log("Привет из мира Linux!");
//     break;
//   case "darwin":
//     console.log("Запущено на macOS.");
//     break;
//   default:
//     console.log("Unexpected OS");
// }

setInterval(() => {
  const memory = (os.freemem() / 1000 / 1000).toFixed(2);
  console.log(`Свободной памяти: ${memory}MB`);

  if (+memory < 500) {
    console.log("Осторожно! У вас осталось мало памяти");
  }
}, 3000);
