var express = require('express');
var router = express.Router();
const usrSrv = require("../services/userService");
const roleSrv = require("../services/roleService");
const msgSrv = require("../services/msgService")
const addressService = require("../services/addressService")
/* GET home page. */
router.get('/', async function (req, res, next) {
  // res.render('index', { title: 'Express' });
  try {

    let userdata = {
      name: "vijin",
      place: "mtm",
      state: "tamilnadu",
      role_id: '5f2cf5e2caf2784c8997cb25',
      address: '5f2cf5e2caf2784c8997cb44'
    }
    console.log(userdata)
    let user = await usrSrv.createUser(userdata);
    if (user) {
      let messages = {
        text: "how are you",
        userId: user._id
      }
      console.log(messages)
      let msg = await msgSrv.createMsg(messages);
      if (msg) {
        console.log("messages")
        res.json({ status: "user saved successfully", "result": user, msg: msg })
      }
    }
  }
  catch (e) {
    res.json({ status: "error" })
  }
});
router.get('/creare_role', async function (req, res, next) {
  // res.render('index', { title: 'Express' });
  try {

    let userdata = {
      type: "moderator",
    }
    console.log(userdata)
    let saveMsg = await roleSrv.createRole(userdata);
    if(saveMsg)
    res.json({ status: "role saved successfully", "result": saveMsg })
  }
  catch (e) {
    res.json({ status: "error" })
  }
});

router.get('/creare_address', async function (req, res, next) {
  // res.render('index', { title: 'Express' });
  try {

    let userdata = {
      address: "vijin v s v , marthandam",
    }
    console.log(userdata)
    let saveMsg = await addressService.createAddress(userdata);
    if(saveMsg)
    res.json({ status: "address saved successfully", "result": saveMsg })
  }
  catch (e) {
    res.json({ status: "error" })
  }
});
router.get('/get_user', async function (req, res, next) {
  // res.render('index', { title: 'Express' });
  try {

    let userdata = {
      _id: "5f2d271dd902a2290c77b154",
    }
    console.log(userdata)
    let saveMsg = await usrSrv.getUserWithRole(userdata);
    if(saveMsg)
    res.json({ status: "role get successfully", "result": saveMsg })
  }
  catch (e) {
    res.json({ status: "error" })
  }
});

module.exports = router;
