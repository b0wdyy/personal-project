import Media from '../entity/Media';

export default class MediaService {
  async create(file: Express.Multer.File, post) {
    const response = await Media.insert({
      name: file.originalname,
      file_name: file.filename,
      mimetype: file.mimetype,
      post,
    });
    return response;
  }
}
