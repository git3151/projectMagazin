const router = require("express").Router();

const {
    createPost
} = require("../controllers/post");

router.post("/createPost", createPost);


module.exports = router;