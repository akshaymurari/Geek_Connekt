const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");
const notifcationController = require("./controllers/notificationController");

router.get("/searchUsers", userController.searchUsers);

router.post("/editProfilePic", userController.editProfilePic);

router.post("/editBackgroundPic",userController.editBackgroundPic);

router.post("/updateSchoolInfo", userController.updateSchoolInfo);

router.post("/updateLocationInfo", userController.updateLocationInfo);

router.post("/uploadPost", userController.uploadPost);

router.get("/getUserImage", postController.getUserPosts);

router.get("/getAllPosts", postController.getAllPosts);

router.post("/likePost", postController.likePost);

router.get("/getComments", postController.getComments);

router.post("/commentPost", postController.commentPost);

router.get("/", (req, res, next) => {
    res.send("<h1>Welcome to Geek ConnecKt API!</h1>");
});

router.post("/addEvents", (res, req) => {
    require("./controllers/eventsController").addEvents(res, req);
});

router.post("/getEvents", (res, req) => {
    require("./controllers/eventsController").getEvents(res, req);
});

router.post("/getAllEvents", (res, req) => {
    require("./controllers/eventsController").getAllEvents(res, req);
});

router.post("/logout", (res, req) => {
    require("./controllers/userController").logout(res, req);
});

router.post("/addutility", (res, req) => {
    require("./controllers/utilityController").addutility(res, req);
});

router.post("/getutilities", (res, req) => {
    require("./controllers/utilityController").getutilities(res, req);
});

router.post("/updateRating", (res, req) => {
    require("./controllers/utilityController").updateRating(res, req);
});

router.post("/addachievement", (res, req) => {
    require("./controllers/Achievements").addachievement(res, req);
});

router.post("/getachievements", (res, req) => {
    require("./controllers/Achievements").getachievements(res, req);
});

router.post("/deleteAchievement", (res, req) => {
    require("./controllers/Achievements").deleteAchievement(res, req);
});

router.post("/addNews", (res, req) => {
    require("./controllers/newsController").addNews(res, req);
});

router.post("/getNews", (res, req) => {
    require("./controllers/newsController").getNews(res, req);
});

router.post("/deleteNews", (res, req) => {
    require("./controllers/newsController").deleteNews(res, req);
});

router.post("/SavePost", (res, req) => {
    require("./controllers/savedPosts").SavePost(res, req);
});

router.post("/getSavedPosts", (res, req) => {
    require("./controllers/savedPosts").getSavedPosts(res, req);
});

router.post("/getMySavedPosts", (res, req) => {
    require("./controllers/savedPosts").getMySavedPosts(res, req);
});

router.post("/getStarOfTheMonth", (res, req) => {
    require("./controllers/starofthemonth").getStarOfTheMonth(res, req);
});

router.get("/getNotifications", notifcationController.getNotifications);

router.delete("/deleteUserNotification", notifcationController.deleteUserNotification);

router.post("/deleteNotes",(req,res)=>{
    require("./controllers/notesController").deleteNotes(req,res);
});

router.post("/uploadNotes", (req, res) => {
    require("./controllers/notesController").uploadNotes(req, res);
});

router.post("/downloadNotes", (req, res) => {
    require("./controllers/notesController").downloadNotes(req, res);
});

router.post("/searchNotes", (req, res) => {
    require("./controllers/notesController").searchNotes(req, res);
});

router.post("/getNotes", (req, res) => {
    require("./controllers/notesController").getNotes(req, res);
});

router.post("/getAllNotes", (req, res) => {
    require("./controllers/notesController").getAllNotes(req, res);
});

module.exports = router;
