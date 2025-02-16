const { Router } = require("express");
const StoryController = require("../controllers/Story");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

router.get("/search", async (req, res) => {
  const { query } = req.query;

  try {
    const stories = await StoryController.searchStories(query);

    if (!stories || stories.length === 0) {
      console.log("No stories found");
      return res.status(200).json([]);
    }

    return res.status(200).json(stories);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:date?", async (req, res) => {
  try {
    const dateParam = req.params.date || new Date().toISOString().split("T")[0];
    const stories = await StoryController.getStoriesFromDate(dateParam);
    res.json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
  }
});

router.get("/week/:startDate", async (req, res) => {
  const stories = await StoryController.getStoriesForWeek(req.params.startDate);
  res.json(stories);
});

router.get("/story/:id", async (req, res) => {
  const story = await StoryController.getFromId(req.params.id);
  res.json(story);
});

router.post("/submit/", async (req, res) => {
  const { title, description, journalists, publishBy, topic } = req.body;
  console.log("submitting in backend,", req.body);
  const result = await StoryController.submitStory(
    title,
    description,
    journalists,
    publishBy,
    topic
  );
  res.json(result);
});

module.exports = router;
