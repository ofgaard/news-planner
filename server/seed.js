const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed = async () => {
  // Clear previous data
  await prisma.user.deleteMany({});
  await prisma.story.deleteMany({});

  // Dummy Users
  await prisma.user.createMany({
    data: [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "password123",
      },
      { name: "Bob Smith", email: "bob@example.com", password: "password123" },
      {
        name: "Charlie Davis",
        email: "charlie@example.com",
        password: "password123",
      },
    ],
    skipDuplicates: true, // Skip duplicates if emails already exist
  });

  // Fetch users after creation
  const users = await prisma.user.findMany();

  // Dummy Stories for January 29, 2025
  const date = new Date("2025-01-29");

  const stories = await prisma.story.createMany({
    data: [
      {
        title: "Breaking News: Market Crash",
        description:
          "Stock markets have taken a sharp downturn today due to unforeseen economic shifts.",
        publishBy: date,
        topic: "Finance",
      },
      {
        title: "Sports: Super Bowl Preview",
        description:
          "As the Super Bowl approaches, we analyze the top teams and players to watch.",
        publishBy: date,
        topic: "Sports",
      },
      {
        title: "Weather Update: Snowstorm Alert",
        description:
          "A massive snowstorm is expected to hit the region tomorrow, with dangerous conditions.",
        publishBy: date,
        topic: "Weather",
      },
      {
        title: "Health: New Study on Exercise and Mental Health",
        description:
          "A recent study shows how daily exercise can greatly improve mental health and reduce stress.",
        publishBy: date,
        topic: "Health",
      },
      {
        title: "Tech: AI Innovations in 2025",
        description:
          "Exploring the cutting-edge advancements in artificial intelligence technology and their potential applications.",
        publishBy: date,
        topic: "Technology",
      },
    ],
  });

  // Fetch created stories so we can assign journalists to them
  const createdStories = await prisma.story.findMany({
    where: {
      publishBy: date,
    },
  });

  // Assign Journalists to Stories (randomly assigning users)
  for (const story of createdStories) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    await prisma.storyOnUser.create({
      data: {
        storyId: story.id,
        userId: randomUser.id,
      },
    });
  }

  console.log("Database seeded successfully!");
};

seed()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
