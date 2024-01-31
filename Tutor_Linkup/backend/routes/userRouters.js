const user = require("../models/user.js");
const express = require('express');
const router = express.Router();
const path=require('path');

const {viewProfile, editProfile, deleteUser, createUser,userIdentity} = require('../controllers/userController.js');

// base route /user

router.get('/view/:id', viewProfile);
router.put('/edit/:id', editProfile);
router.delete('/delete/:id', deleteUser);
router.post('/create',createUser)
router.post('/identity',userIdentity);
// a server that saves cookies for login and rediects the page from users_identity to the sign-_page
router.get('/sign_up',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../../html and css for registration and tutor profie/sign up with email form/signup.html'));
});


module.exports = router;