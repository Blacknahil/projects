const express = require('express');
const router = express.Router();
const path=require('path');

const {viewProfile,
     editProfile, 
     deleteUser, 
     createUser} = require('../controllers/userController.js');

// const {
//     signUp,
//     login,
//     changePassword,
//     resetPassword,
//     forgotPassword
// } = require('../controllers/authControllers.js')

router.post('/create', createUser);

router.get('/view/:id', viewProfile);

router.put('/edit/:id', editProfile);

router.delete('/delete/:id', deleteUser);
router.post('/create',createUser)
router.post('/identity',userIdentity);
// a server that saves cookies for login and rediects the page from users_identity to the sign-_page
router.get('/sign_up',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../../html and css for registration and tutor profie/sign up with email form/signup.html'));
});


// router.post('/signup', signUp);
// router.post('/login', login);
// router.post('/changePassword', changePassword);
// router.post('/resetPassword', resetPassword);
// router.post('/forgotPassword', forgotPassword);

module.exports = router;
