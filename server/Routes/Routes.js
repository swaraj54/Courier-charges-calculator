const express = require('express');
const router = express.Router();
const areaController = require("../Controllers/Controls");

router.get("/", areaController.getAllarea);
router.post("/", areaController.addArea);
router.get('/', areaController.checker)

module.exports = router;