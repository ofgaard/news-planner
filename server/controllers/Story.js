const prisma = require("../config/PrismaClient");

const getAllFromDate = async (date) => {
  const selectedDate = date ? new Date(date) : new Date();

  const startOfDay = new Date(selectedDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  try {
    const stories = await prisma.story.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
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
    throw new Error("From Backend: Error fetching stories (day)");
  }
};

const getAllFromWeek = async (start_date) => {
  try {
    const allStories = [];

    const startDate = new Date(start_date);

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const stories = await getAllFromDate(currentDate);
      allStories.push({
        date: currentDate.toISOString().split("T")[0],
        stories: stories || [],
      });
    }
    return allStories;
  } catch (error) {
    console.log(error);
    throw new Error("From Backend: Error fetching stories (week)");
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

module.exports = { getAllFromDate, getAllFromWeek, getFromId, submitStory };
