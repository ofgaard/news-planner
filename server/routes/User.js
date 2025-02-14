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

module.exports = router;
