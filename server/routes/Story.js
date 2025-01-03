const { Router } = require("express");
const StoryController = require("../controllers/Story");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

router.get("/:date", async (req, res) => {
  const stories = await StoryController.getAllFromDate(req.params.date);
  res.json(stories);
});

module.exports = router;
