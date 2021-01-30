const fileService = require("../services/fileService");
const User = require("../models/User");
const File = require("../models/File");

class FileController {
  async createDir(req, res) {
    try {
      const { name, type, parent } = req.body;
      // создаем новый файл
      const file = new File({ name, type, parent, user: req.user.id });
      // найдем родительский файл
      const parentFile = await File.findOne({ _id: parent });
      // в зависимости от того найден ли родительский файл путь будет отличаться
      // если родителький файл не был найден, то файл будет добавлен в родительскую директорию
      // если родительский файл был найден, то пишем родительский путь и приплюсовываем имя файла
      if (!parentFile) {
        file.path = name;
        await fileService.createDir(file);
      } else {
        file.path = `${parentFile.path}\\${file.name}`;
        await fileService.createDir(file);
        // пушим в массив к родителю имя файла
        parentFile.childs.push(file._id);
        await parentFile.save();
      }

      // сохраняем родительский файл
      await file.save();
      // и возвращаем его в ответе от сервера
      return res.json(file);
    } catch (error) {
      return res.status(400).json({errors: error.message, message: "Can not create files"});
    }
  }

  async getFiles(req, res) {
    try {
      const files = await File.find({
        user: req.user.id,
        parent: req.query.parent,
      });
      return res.json(files);
    } catch (error) {
      return res.status(500).json({errors: error.message, message: "Can not get files" });
    }
  }
}

module.exports = new FileController();
