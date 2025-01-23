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

router.get("/week/:start_date", async (req, res) => {
  const stories = await StoryController.getAllFromWeek(req.params.start_date);
  res.json(stories);
});

module.exports = router;
