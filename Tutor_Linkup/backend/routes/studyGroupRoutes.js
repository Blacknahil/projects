const studyGroup = require("../models/studyGroup.js");
const express = require('express');
const router = express.Router();

const { getGroup, addGroupMember, createGroup, deleteGroup } = require("../controllers/studyGroupController.js");

// base route /group

router.get('/:id', getGroup);
router.put('/:id', addGroupMember);
router.post('/', createGroup);
router.delete('/:id', deleteGroup);

module.exports = router;