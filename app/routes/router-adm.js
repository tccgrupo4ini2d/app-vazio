const express = require("express")
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index-adm")
})

router.get("/painel-adm", (req, res)=>{
    res.render("pages/painel-adm")
})


module.exports = router