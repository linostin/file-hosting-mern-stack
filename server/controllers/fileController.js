const fileService = require("../services/fileService");
const User = require("../models/User");
const File = require("../models/File");
const config = require("config");
const fs = require("fs");
const { use } = require("../routes/auth.routes");

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
      return res
        .status(400)
        .json({ errors: error.message, message: "Can not create files" });
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
      return res
        .status(500)
        .json({ errors: error.message, message: "Can not get files" });
    }
  }

  async uploadFile(req, res) {

    try {
      // получаем файл из запроса
      const file = req.files.file;

      // находим родительскую директорорию в которую будем сохранять файл
      // ищем по id пользователя, который мы достаем из токена и по id директорории из тела запроса
      const parent = await File.findOne({
        user: req.user.id,
        _id: req.body.parent,
      });

      // ищем пользователя, чтобы проверить свободное место у него
      const user = await User.findOne({ _id: req.user.id });

      if (user.usedSpace + file.size > user.diskSpace) {
        return res.status(400).json({
          errors: error.message,
          message: "No free space on the disk",
        });
      }

      user.usedSpace = user.usedSpace + file.size;

      let path;
      if (parent) {
        path = `${config.get("filePath")}\\${user._id}\\${parent.path}\\${
          file.name
        }`;
      } else {
        path = `${config.get("filePath")}\\${user._id}\\${file.name}`;
      }

      // проверяем есть ли файл по данному пути
      if (fs.existsSync(path)) {
        return res
          .status(400)
          .json({ errors: error.message, message: "File already exist" });
      }

      // перемещаем файл по ранне созданному пути
      file.mv(path);

      // получаем тип файла
      const type = file.name.split(".").pop();

      let filePath = file.name
      if (parent) {
        filePath = parent.path + '\\' + file.name 
      }

      let parentId = parent
      if (parent) {
        parentId = parent_id;
      }

      const dbFile = new File({
        name: file.name,
        type,
        size: file.size,
        // path: parent?.path,
        // parent: parent?._id,
        path: filePath,
        parent: parentId, 
        user: user._id,
      });

      await dbFile.save();
      await user.save();

      res.json(dbFile);
    } catch (error) {
      return res
        .status(500)
        .json({ errors: error.message, message: "Upload error" });
    }
  }

  async downLoadFile(req, res) {
    try {
      const file = await File.findOne({
        _id: req.query.id,
        user: req.user.id,
      });

      const path =
        config.get("filePath") +
        "\\" +
        req.user.id +
        "\\" +
        file.path +
        "\\" +
        file.name;

      if (fs.existsSync(path)) {
        return res.download(path, file.name);
      }

      return res
        .status(400)
        .json({
          errors: error.message,
          message: "File not found, download error",
        });
    } catch (error) {
      return res
        .status(500)
        .json({ errors: error.message, message: "Download error" });
    }
  }


  async deleteFile(req, res) {
    try {
      const file = await File.findOne({
        _id: req.query.id,
        user: req.user.id,
      });

      if (!file) {
        return res
        .status(400)
        .json({
          errors: error.message,
          message: "File not found",
        });
      }

      console.log("file delete", file)

      // удаляем файл физически с сервера
      fileService.deleteFile(file)
      // удаляем модель файла из базы данных
      await file.remove()

      return res
        .json({ message: "File was deleted" });

      
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.message, message: "Delete error" });
    }
  }

}

module.exports = new FileController();
