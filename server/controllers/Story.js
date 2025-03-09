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

const searchStories = async (query) => {
  try {
    const result = await prisma.story.findMany({
      where: {
        OR: [
          {
            title: { contains: query, mode: "insensitive" },
          },
          {
            description: { contains: query, mode: "insensitive" },
          },
        ],
      },
      include: {
        Topic: true,
        journalists: {
          include: { user: true },
        },
        comments: true,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteStory = async (id) => {
  try {
    console.log(id);
    const response = await prisma.story.delete({
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
    return response;
  } catch (err) {
    console.log(err);
  }
};

const submitStory = async (
  title,
  description,
  journalistIds,
  publishBy,
  topic
) => {
  try {
    publishBy = new Date(publishBy).toISOString();
    const story = await prisma.story.create({
      data: {
        title,
        description,
        publishBy,
        topic,
        journalists: {
          create: journalistIds.map((id) => ({
            user: {
              connect: { id },
            },
          })),
        },
      },
    });
    return story;
  } catch (error) {
    console.error("Error creating story:", error);
    throw error;
  }
};

const editStory = async (id, updates) => {
  try {
    const storyId = parseInt(id);
    if (isNaN(storyId)) throw new Error("Invalid story ID");

    const updatedStory = await prisma.story.update({
      where: { id: storyId },
      data: updates,
      include: {
        journalists: {
          include: { user: true },
        },
      },
    });

    return updatedStory;
  } catch (error) {
    console.error("Error updating story:", error);
    throw error;
  }
};

module.exports = {
  getStoriesFromDate,
  getStoriesForWeek,
  getFromId,
  submitStory,
  searchStories,
  deleteStory,
  editStory,
};
