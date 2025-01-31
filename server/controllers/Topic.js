const prisma = require("../config/PrismaClient");

const getTopics = async () => {
  const topicArray = [];
  try {
    const topics = await prisma.topic.findMany();
    topics.forEach((topic) => {
      topicArray.push(topic.name);
    });
    console.log(topicArray);
    return topicArray;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getTopics,
};
