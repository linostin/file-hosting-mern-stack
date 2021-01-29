const { Router } = require("express");
const router = Router();
const File = require("../models/File");
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require("../controllers/fileController")


router.post('', authMiddleware, fileController.createDir)
router.post('', authMiddleware, fileController.getFiles)


module.exports = router;