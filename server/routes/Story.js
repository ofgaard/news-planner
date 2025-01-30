const { Router } = require("express");
const StoryController = require("../controllers/Story");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

router.get("/:date", async (req, res) => {
  const stories = await StoryController.getStoriesFromDate(req.params.date);
  res.json(stories);
});

router.get("/week/:startDate", async (req, res) => {
  const stories = await StoryController.getStoriesByDateRange(
    req.params.startDate
  );
  res.json(stories);
});

router.get("/story/:id", async (req, res) => {
  const story = await StoryController.getFromId(req.params.id);
  res.json(story);
});

router.post("/submit/", async (req, res) => {
  const { title, description, journalistIds, topic } = req.body;
  const result = await StoryController.submitStory(
    title,
    description,
    journalistIds,
    topic
  );
  res.json(result);
});

module.exports = router;
