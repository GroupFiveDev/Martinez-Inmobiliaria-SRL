const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "TJInmobiliaria",
  });
}

async function deleteImage(imagesID) {
  return await cloudinary.api.delete_resources(
    imagesID,
    function (error, result) {
      console.log(result);
    }
  );
}

module.exports = { uploadImage, deleteImage };
