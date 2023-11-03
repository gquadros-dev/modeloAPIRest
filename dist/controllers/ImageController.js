"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Image = require('../models/Image'); var _Image2 = _interopRequireDefault(_Image);

const upload = _multer2.default.call(void 0, _multer4.default).single('image');

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const image = await _Image2.default.create({ originalname, filename, aluno_id });

        return res.json(image);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

exports. default = new ImageController();
