const path = require('path');
const multer = require("multer");
const pathImages = path.resolve('public');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(pathImages, '/images/userProfile'));
    },
    filename: (req, file, cb) => {
        let fileName = `profile_${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({storage});
module.exports = upload;