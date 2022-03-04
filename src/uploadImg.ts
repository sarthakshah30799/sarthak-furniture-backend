import * as AWS from "aws-sdk";
import multerS3 from "multer-s3";
import multer from "multer";

AWS.config?.update({
  region: "ap-south-1",
  accessKeyId: "AKIAURJ7EJN4MBVFZF5E",
  secretAccessKey: "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",
});
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

export const imgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "sf-sample-images",
    acl: "public-read",
    key: function (req, file, cb) {
      console.log("req in image upoad", req);
      console.log("file image upoad", file);
      cb(null, `${file.originalname}`);
    },
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
  }),
  // limits: { fileSize: 5000000 },
  // fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb);
  // },
});

// export const multipleUpload = multer({ storage: storage }).array("file");

// function checkFileType(file, cb) {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);
//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Images Only!");
//   }
// }
