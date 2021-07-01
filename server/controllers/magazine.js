const Post = require("../models/post")
const Magazin = require("../models/magazin")

const createMagazin = async (req, res) => {
    try {
        let newMagazine = new Magazin(req.body)
        await newMagazine.save();
        res.status(200).json("create magazin")
    } catch (error) {
        res.status(404).json(error)
    }
}

const getAllMagazin = async (req, res) => {
    try {
        const allMagazin = await Magazin.find()
        res.status(200).json(allMagazin)
    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
    createMagazin,
    getAllMagazin
}