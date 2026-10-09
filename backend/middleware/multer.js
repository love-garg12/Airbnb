import multer from 'multer';
import os from 'node:os';

const upload = multer({ dest: os.tmpdir() });

export default upload;