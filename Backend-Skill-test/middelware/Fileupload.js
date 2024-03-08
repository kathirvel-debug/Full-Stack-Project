import multer from "multer";
//\Full-stack\shopingcart\public
const storage = multer.diskStorage({
    destination: '../shopingcart/public/Productimages',
    filename: (req, file, cb) => {
      cb(
        null,
        file.originalname
      );
    },
  });
  
  export const upload = multer({
    storage: storage,
  });
  