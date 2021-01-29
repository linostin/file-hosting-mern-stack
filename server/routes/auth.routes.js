const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = Router();
const authMiddleware = require('../middleware/auth.middleware')

// /api/auth/register
// регистрация пользователя
router.post(
  "/register",
  // валидация данных, пришедших с фронта
  [
    check("email", "Введен некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      //console.log('Body', req.body)

      // обработка валидации
      const errors = validationResult(req);
      // если объект errors не пустой, значит присутствуют ошибки
      if (!errors.isEmpty()) {
        // возвращаем ошибку на фронтенд
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }

      const { email, password } = req.body;

      // поиск в базе данных email пользователя
      const candidate = await User.findOne({ email: email });
      if (candidate) {
        // если пользователь найден выводим сообщение
        // чтобы дальше скрипт не отрабатывал пишем return
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }

      // если пользователя нет, создаем
      // предварительно шифруем пароль через bcryptjs
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email: email, password: hashedPassword });

      // ждем пока новый пользователь сохранится в базе данных
      await user.save();
      // после выводим сообщение об успешной регистрации
      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
);

// /api/auth/login
// login пользователя
router.post(
  "/login",
  [
    check("email", "Введен некорректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      // обработка валидации
      const errors = validationResult(req);
      // если объект errors не пустой, значит присутствуют ошибки
      if (!errors.isEmpty()) {
        // возвращаем ошибку на фронтенд
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе в систему",
        });
      }

      const { email, password } = req.body;

      // поиск в базе данных email пользователя
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      // проверка совападает ли введенный пароль пользователя
      const isMatch = await bcrypt.compare(password, user.password);

      // если пароли не совпадают
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Неверный пароль, попробуйте снова" });
      }

      // jwt сохранение сессии
      const token = jwt.sign({ id: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      return res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            diskSpace: user.diskSpace,
            usedSpace: user.usedSpace,
            avatar: user.avatar
        }
    })
    } catch (error) {
      res.status(500).json({
        errors: error.message,
        message: "Что-то пошло не так, попробуйте снова",
      });
    }
  }
);


router.get(
    "/auth", authMiddleware,
    async (req, res) => {
      try {
        const user = await User.findOne({_id: req.user.id})

        const token = jwt.sign({ id: user.id }, config.get("jwtSecret"), {
            expiresIn: "1h",
          });
    
          return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
        })

      } catch (error) {
        // res.status(500).json({
        //   errors: error.message,
        //   message: "Что-то пошло не так, попробуйте снова",
        // });
        console.log(error)
            res.send({message: "Server error"})
      }
    }
  );


module.exports = router;
