const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index")
})

router.post("/adm", (req, res)=>{
    
})



module.exports = router;