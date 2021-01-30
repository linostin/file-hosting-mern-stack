const fs = require("fs");
const File = require("../models/File");
const config = require("config");

class FileService {
  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`;

    return new Promise((resolve, reject) => {
      try {
        //если файл существует по такому пути то
        // создаем папку
        // вызываем функции в синхронном режиме чтобы код выполнялся последовательно
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
          return resolve({ message: "File was created" });
        } else {
          return reject({ message: "File already exist" });
        }
      } catch (error) {
        return reject({ errors: error.message, message: "File error" });
      }
    });
  }
}

module.exports = new FileService();