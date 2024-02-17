const express = require ('express');
const Post = require("../models/Post");
const router = express.Router();

router.post ('/', async (req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save ();
        res.json(savedPost);

    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.findByIdAndDelete (req, params, postId);
        res.json(removedPost);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;