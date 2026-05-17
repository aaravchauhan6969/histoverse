const express = require("express");

const router = express.Router();

const {

    createStory,
    getStories,
    getSingleStory

} = require("../controllers/storyController");

router.post("/create", createStory);

router.get("/", getStories);

router.get("/:id", getSingleStory);
module.exports = router;