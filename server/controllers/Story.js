const { startOfDay, endOfDay } = require("date-fns");
const prisma = require("../config/PrismaClient");

const getAllFromDate = async (date) => {
  console.log("Date from backend controller:", date);

  const localDate = new Date(`${date}T00:00:00`);
  const startOfDayLocal = startOfDay(localDate);
  const endOfDayLocal = endOfDay(localDate);

  console.log("startOfDayLocal", startOfDayLocal);
  console.log("endOfDayLocal", endOfDayLocal);

  try {
    const stories = await prisma.story.findMany({
      where: {
        createdAt: {
          gte: startOfDayLocal,
          lte: endOfDayLocal,
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
    if (!stories) {
      console.log("No stories found");
    }
    console.log("Stories from backend controller:", stories);
    return stories;
  } catch (error) {
    console.log(error);
    throw new Error("From Backend: Error fetching stories (day)");
  }
};

const getAllFromWeek = async (start_date) => {
  try {
    const allStories = [];

    const startDate = new Date(`${start_date}T00:00:00`);

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const formattedDate = currentDate.toISOString().split("T")[0];
      const stories = await getAllFromDate(formattedDate);
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
