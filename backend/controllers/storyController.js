const Story = require("../models/Story");
const mongoose = require("mongoose");
const createStory = async (req, res) => {

    try{

        const story = await Story.create(req.body);

        res.status(201).json(story);

    }catch(error){

        console.log(error);

        res.status(500).json({
            message:error.message
        });
    }
};

const getStories = async (req, res) => {

    try{

        const stories = await Story.find();

        res.json(stories);

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};
const getSingleStory = async (req,res)=>{

    try{

        const story =
        await Story.findById(req.params.id);

        res.json(story);

    }catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};
module.exports = {

    createStory,
    getStories,
    getSingleStory
};