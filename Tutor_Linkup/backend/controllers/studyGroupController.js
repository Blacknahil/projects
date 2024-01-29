const Group = require("../models/group.js");  // Updated to reflect the correct model file name
const asyncHandler = require("express-async-handler");

const createGroup = asyncHandler(async (req, res) => {
    const { userId, content } = req.body;
    const newGroup = new Group({ sender: userId, content });
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
    const { groupId } = req.params;
    const group = await Group.findById(groupId);

    if (!group) {
        return res.status(404).json({ error: 'Group not found' });
    }

    res.json(group);
    
module.exports = {
    createGroup,
    addGroupMember,
    deleteGroup,
    leaveGroup, 
    getGroup
};
