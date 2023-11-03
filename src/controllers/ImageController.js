import multer from 'multer';
import multerConfig from '../config/multer';

import Image from '../models/Image';

const upload = multer(multerConfig).single('image');

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
        const image = await Image.create({ originalname, filename, aluno_id });

        return res.json(image);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

export default new ImageController();
