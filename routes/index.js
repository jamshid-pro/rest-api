const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1 style='color:azure; background-color:black;'>Home Page</h1>");
});

module.exports = router;