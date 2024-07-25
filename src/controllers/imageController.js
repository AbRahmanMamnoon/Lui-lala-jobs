// const Image = require("../models/imageModule");
// const path = require("path");

// exports.uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     const { filename, size, mimetype } = req.file;
//     const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${filename}`;

//     const newImage = new Image({
//       name: filename,
//       image: imageUrl,
//     });

//     await newImage.save();

//     res.status(201).json({
//       message: "Image uploaded successfully",
//       image: newImage,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error uploading image" });
//   }
// };

// exports.getImageById = async (req, res) => {
//   try {
//     const image = await Image.findById(req.params.id);
//     if (!image) {
//       return res.status(404).json({ message: "Image not found" });
//     }
//     res.status(200).json({
//       message: "Image fetched successfully",
//       image,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching image" });
//   }
// };

// exports.getImages = async (req, res) => {
//   try {
//     const images = await Image.find();
//     res.status(200).json({
//       length: images.length,
//       images,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching images" });
//   }
// };
