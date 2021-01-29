const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  } 

  try {
    // получаем токен из заголовка запроса authorization
    // токен состоит из двух частей это Bearer (тип токена) и сам токен
    // разделим его функцией split и получим второй элемент массива - сам токен 
    const token = req.headers.authorization.split(' ')[1]

    // проверим наличие токена
    if (!token) {
      return res.status(401).json({message: 'Auth error'})
    }

    // раскодируем токен и получим данные
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded
    next()

  } catch (error) {
    return res.status(401).json({message: 'Auth error'})
  }
}