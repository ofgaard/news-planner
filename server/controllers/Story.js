const prisma = require("../config/PrismaClient");

const getAllFromDate = async (date) => {
  const selectedDate = new Date(date);

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
  }
};

module.exports = { getAllFromDate };
