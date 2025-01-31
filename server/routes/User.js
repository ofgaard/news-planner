const { Router } = require("express");
const userController = require("../controllers/User");

const router = Router();

router.get("/", async (req, res) => {
  const users = await userController.getAllUsers();
  console.log("users in router:", users);
  res.json(users);
});

module.exports = router;
