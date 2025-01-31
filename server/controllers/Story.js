const { startOfDay, endOfDay } = require("date-fns");
const prisma = require("../config/PrismaClient");

const getStoriesFromDate = async (dateParam) => {
  try {
    const date = new Date(dateParam);

    if (isNaN(date)) {
      throw new Error("Invalid date");
    }
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const stories = await prisma.story.findMany({
      where: {
        publishBy: {
          gte: startOfDay,
          lt: endOfDay,
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

const getStoriesForWeek = async (dateParam) => {
  try {
    const date = new Date(dateParam);
    if (isNaN(date)) throw new Error("Invalid date");

    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1);

    const stories = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      const startOfDay = new Date(day);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(day);
      endOfDay.setHours(23, 59, 59, 999);

      const dailyStories = await prisma.story.findMany({
        where: {
          publishBy: {
            gte: startOfDay,
            lt: endOfDay,
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

      stories.push({
        date: day.toISOString().split("T")[0],
        stories: dailyStories,
      });
    }

    return stories;
  } catch (error) {
    console.log(error);
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

module.exports = {
  getStoriesFromDate,
  getStoriesForWeek,
  getFromId,
};
