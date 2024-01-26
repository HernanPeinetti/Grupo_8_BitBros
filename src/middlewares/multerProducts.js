const path = require("path");
const multer = require("multer");
const pathImages = path.resolve("public");
const extensions = [".jpg", ".jpeg", ".png", ".gif"];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(pathImages, "/images/products"));
    },
    filename: (req, file, cb) => {
        let fileName = `product_${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage });

module.exports = upload;
