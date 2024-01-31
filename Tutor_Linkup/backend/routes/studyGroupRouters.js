const studyGroup = require("../models/studyGroup.js");
const express = require('express');
const router = express.Router();

const { getGroup, addGroupMember, createGroup, deleteGroup, leaveGroup } = require("../controllers/studyGroupController.js");

// base route /group

router.get('/get/:id', getGroup);
router.put('/add/:id', addGroupMember);
router.post('/create', createGroup);
router.delete('/delete/:id', deleteGroup);
router.post('/leave/:id', leaveGroup);

module.exports = router;
