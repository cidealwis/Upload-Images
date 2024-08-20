import UserModel from "../models/User.js";

// Service to create a new user with an image
export const createUserWithImage = async (data) => {
  try {
    const newUser = await UserModel.create({ image: data.imageData });
    return newUser;
  } catch (error) {
    throw error;
  }
};

// Service to get all user images
export const getAllUserImages = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};
