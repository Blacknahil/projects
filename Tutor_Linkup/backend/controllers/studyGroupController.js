const studyGroup = require("../models/studyGroup.js");
const Group = require("../models/studyGroup.js");  // Updated to reflect the correct model file name
const asyncHandler = require("express-async-handler");

const createGroup = asyncHandler(async (req, res) => {
    const { members, content } = req.body;
    const newGroup = new Group({ members, content });
    const savedGroup = await newGroup.save();

    res.json(savedGroup);
});

const addGroupMember = asyncHandler(async (req, res) => {
    const { groupId, userId } = req.body;
    const group = await Group.findById(groupId);

    if (!group) {
        return res.status(404).json({ error: 'Group not found' });
    }

    group.members.push(userId);
    const updatedGroup = await group.save();

    res.json(updatedGroup);
});

const deleteGroup = asyncHandler(async (req, res) => {
    const { groupId } = req.params;
    const deletedGroup = await Group.findByIdAndDelete(groupId);

    if (!deletedGroup) {
        return res.status(404).json({ error: 'Group not found' });
    }

    res.json({ message: 'Group deleted successfully' });
});

const leaveGroup = asyncHandler(async (req, res) => {
    const { groupId, userId } = req.body;
    const group = await Group.findById(groupId);

    if (!group) {
        return res.status(404).json({ error: 'Group not found' });
    }

    group.members.pull(userId);
    const updatedGroup = await group.save();

    res.json(updatedGroup);
});

const getGroup = asyncHandler (async (req,res) => {
    // const { groupId } = req.params;
    // const group = await Group.findById(groupId);

    // if (!group) {
    //     return res.status(404).json({ error: 'Group not found' });
    // }

    // res.json(group);
        try {
            // Fetch posts from the database
            const groups = await studyGroup.find();
    
            // Send the posts as JSON data in the response
            res.status(200).json({ groups });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

});
    
module.exports = {
    createGroup,
    addGroupMember,
    deleteGroup,
    leaveGroup, 
    getGroup
};
