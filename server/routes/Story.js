const { Router } = require("express");
const StoryController = require("../controllers/Story");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

router.get("/:date?", async (req, res) => {
  try {
    const dateParam = req.params.date || new Date().toISOString().split("T")[0];
    const stories = await StoryController.getStoriesFromDate(dateParam);
    res.json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ message: "Error fetching stories" });
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
  const { title, description, journalistIds, publishBy, topic } = req.body;
  const result = await StoryController.submitStory(
    title,
    description,
    journalistIds,
    topic
  );
  res.json(result);
});

module.exports = router;
