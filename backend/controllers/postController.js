const User = require("../models/user");
const Post = require("../models/post");

exports.getUserPosts = async (req, res, next) => {
    try {
        console.log(req.query);
        const userId = req.query.userId;
        const user = await User.findById(userId);
        console.log(user);
        if (user) {
            const posts = await Post.find({ user: userId })
                .skip((req.query.pageNumber - 1) * 6)
                .limit(6);
            Post.count({ userId: userId }).then((count) => {
                res.status(200).json({
                    message: "Posts fetched successfully",
                    posts: posts,
                    remPosts: count - req.query.pageNumber * 6,
                });
            });
        } else {
            res.status(404).json({
                message: "User not found",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error occured while fetching posts",
        });
    }
};

exports.getAllPosts = async (req, res, next) => {
    try {
        const userId = req.query.id;
        const user = await User.findById(userId);
        if (user) {
            const posts = await Post.find({ college: user.college })
                .populate("user")
                .skip((req.query.pageNumber - 1) * 10)
                .sort({ createdAt: -1 })
                .limit(10);
            Post.count().then((count) => {
                res.status(200).json({
                    message: "Posts fetched successfully",
                    posts: posts,
                    remPosts: count - req.query.pageNumber * 10,
                });
            });
        } else {
            res.status(404).json({
                message: "User not found",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error occured while fetching posts",
        });
    }
};
