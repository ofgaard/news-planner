const { startOfDay, endOfDay } = require("date-fns");
const prisma = require("../config/PrismaClient");

const getStoriesFromDate = async (date) => {
  const localDate = new Date(`${date}T00:00:00-06:00`);
  const utcDate = new Date(localDate.toISOString());

  try {
    const stories = await prisma.story.findMany({
      where: {
        createdAt: {
          gte: utcDate,
          lt: new Date(utcDate.getTime() + 24 * 60 * 60 * 1000),
        },
      },
      include: {
        journalists: {
          include: {
            user: true,
          },
        },
      },
    });
    return stories;
  } catch (error) {
    console.log(error);
  }
};

const getStoriesByDateRange = async (startDate) => {
  try {
    const startOfWeek = new Date(startDate);
    const endOfWeek = new Date(startDate);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const stories = await prisma.story.findMany({
      where: {
        createdAt: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
      },
      include: {
        journalists: {
          include: {
            user: true,
          },
        },
      },
    });
    return stories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getFromId = async (id) => {
  try {
    const story = await prisma.story.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        journalists: {
          include: {
            user: true,
          },
        },
      },
    });
    return story;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const submitStory = async (title, description, userId, date, topic) => {
  try {
    const story = await prisma.story.create({
      data: {
        title,
        description,
        date,
        topic,
      },
    });
    await prisma.storyOnUser.create({
      data: {
        userId: parseInt(userId),
        storyId: parseInt(story.id),
      },
    });
    return story;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getStoriesFromDate,
  getStoriesByDateRange,
  getFromId,
  submitStory,
};
