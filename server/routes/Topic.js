const { Router } = require("express");
const TopicController = require("../controllers/Topic");
console.log(TopicController);

const router = Router();

router.get("/", async (req, res) => {
  const topics = await TopicController.getTopics();
  res.json(topics);
});

module.exports = router;
