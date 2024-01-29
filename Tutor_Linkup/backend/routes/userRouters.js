const express = require('express');
const router = express.Router();

const { 
    viewProfile, 
    editProfile, 
    deleteUser, 
    createUser,
} = require('../controllers/userController.js');

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

// router.post('/signup', signUp);
// router.post('/login', login);
// router.post('/changePassword', changePassword);
// router.post('/resetPassword', resetPassword);
// router.post('/forgotPassword', forgotPassword);

module.exports = router;
