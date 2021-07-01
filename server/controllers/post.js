const Magazin = require('../models/magazin')
const Post = require('../models/post')

const createPost = async (req, res) => {
    try {
        let newPost = new Post(req.body)
        console.log("newPost", newPost)
        await newPost.save()
        const magazinId = await Magazin.findById(newPost.magazin)
        console.log("magazinId", magazinId)
        await magazinId.post.push(newPost)
        await magazinId.save()
        console.log("newMagazin", magazinId)
        res.status(200).json('the post saved')
    }
    catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    createPost
}