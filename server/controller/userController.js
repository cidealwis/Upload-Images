import { createUserWithImage, getAllUserImages } from '../service/userService.js';

// Upload file controller
export const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Pass the filename from multer to the service function
    const result = await createUserWithImage(req.file.filename);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving image' });
  }
};

// Get all user images controller
export const getImagesController = async (req, res) => {
  try {
    const images = await getAllUserImages();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
};
