

const router = require("express").Router();
const {
createMagazin,
getAllMagazin
} = require("../controllers/magazine");

router.post("/createMagazin", createMagazin);
router.get("/getAllMagazin", getAllMagazin);


module.exports = router;