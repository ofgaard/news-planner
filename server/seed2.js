import { prisma } from "./prismaClient";

const seedStoriesForWeek = async () => {
  try {
    const currentDate = new Date();

    const getStartOfWeek = (date) => {
      const dayOfWeek = date.getDay();
      const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
      const startOfWeek = new Date(date.setDate(diff));
      return startOfWeek;
    };

    const startOfWeek = getStartOfWeek(new Date(currentDate));

    const storyTitles = [
      "Breaking News: Market Crash",
      "Sports: Super Bowl Preview",
      "Weather Update: Snowstorm Alert",
      "Health: New Study on Exercise and Mental Health",
      "Tech: AI Innovations in 2025",
      "Culture: The Rise of New Music Genres",
      "Travel: Best Destinations for 2025",
    ];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      const storiesForTheDay = storyTitles.map((title, index) => {
        return {
          title,
          description: `${title} - A detailed look at the topic of the day.`,
          publishBy: day,
          createdAt: new Date(),
          updatedAt: new Date(),
          topic: "General",
          journalists: {
            connect: [{ id: index + 1 }],
          },
        };
      });

      await prisma.story.createMany({
        data: storiesForTheDay,
      });

      console.log(
        `Seeded ${
          storiesForTheDay.length
        } stories for ${day.toLocaleDateString()}`
      );
    }

    console.log("Seeding completed for the entire week.");
  } catch (error) {
    console.error("Error seeding stories:", error);
  }
};

seedStoriesForWeek();
