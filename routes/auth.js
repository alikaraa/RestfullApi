const express = require("express");
const {register , login, verify,getAllUser, getDeleteUser } = require("../controllers/auth.js")

const router = express.Router();


router.get('/', function(req,res,next){
    return res.send("Runnings")
});
router.post('/register',register);
router.post('/login',login);
router.get('/verify', verify);
router.get('/getUsers', getAllUser)
router.delete('/delete/:id', getDeleteUser)


module.exports = router