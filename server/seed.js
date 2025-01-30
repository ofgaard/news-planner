// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create dummy journalists (users)
  const journalist1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    },
  });

  const journalist2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password123",
    },
  });

  // Create dummy stories for each day of the week (Monday to Sunday)
  const daysOfWeek = [
    "2025-01-27", // Monday
    "2025-01-28", // Tuesday
    "2025-01-29", // Wednesday
    "2025-01-30", // Thursday
    "2025-01-31", // Friday
    "2025-02-01", // Saturday
    "2025-02-02", // Sunday
  ];

  for (let i = 0; i < daysOfWeek.length; i++) {
    const date = daysOfWeek[i];
    await prisma.story.create({
      data: {
        title: `Breaking News on ${date}`,
        description: `This is a breaking news story for ${date}.`,
        createdAt: new Date(`${date}T10:00:00Z`), // 10:00 AM UTC
        journalists: {
          create: [{ userId: journalist1.id }],
        },
      },
    });

    await prisma.story.create({
      data: {
        title: `Local Event on ${date}`,
        description: `A local event occurred on ${date}.`,
        createdAt: new Date(`${date}T15:00:00Z`), // 3:00 PM UTC
        journalists: {
          create: [{ userId: journalist2.id }],
        },
      },
    });
  }

  console.log("Dummy data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
