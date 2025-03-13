const prisma = require("../config/PrismaClient");

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    console.log("users from controller:", users);
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserStories = async (userId) => {
  try {
    const stories = await prisma.story.findMany({
      where: {
        journalists: {
          some: {
            userId: userId,
          },
        },
      },
    });
    return stories;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  getUserStories,
};
