const fs = require("fs");
const File = require("../models/File");
const config = require("config");

class FileService {
  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`;

    console.log('file.path', file.path)
    console.log("File path", filePath)

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

  deleteFile(file) {
    const filePath = this.getPath(file)

    console.log("path", filePath)
    console.log('"file.type', file.type)
    console.log('file.path', file.path)

    if (file.type === 'dir') {
      fs.rmdirSync(filePath)
    } else {
      fs.unlinkSync(filePath)
    }
  }
  
  getPath(file) {
    return config.get('filePath') + '\\' + file.user + '\\' + file.path
  }
}

module.exports = new FileService();
