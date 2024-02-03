const express = require("express");
const { addTransection, getAllTransection, editTransection,deleteTransection } = require("../controllers/transectionCtrl");


//router obj
const router = express.Router();

//routes
//add transection POST Method
router.post('/add-transection', addTransection)

//Edit transection POST Method
router.post('/edit-transection', editTransection)

//DELETE transection POST Method
router.post('/delete-transection', deleteTransection)


//get transection 
router.post('/get-transection', getAllTransection)

module.exports = router;