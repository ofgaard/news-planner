const { Router } = require("express");
const userController = require("../controllers/User");

const router = Router();

router.get("/", async (req, res) => {
  const users = await userController.getAllUsers();
  console.log("users in router:", users);
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await userController.getUserById(req.params.id);
  res.json(user);
});

router.get("/:id/stories", async (req, res) => {
  const stories = await userController.getUserStories(req.params.id);
  res.json(stories);
});

module.exports = router;
