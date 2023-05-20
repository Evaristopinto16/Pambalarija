const express = require('express')
const router = express.Router();
const controller = require("../controllers/home")
const adminController = require("../controllers/admin") 
const postagens = require("../controllers/postagem")
const upload = require("../config/multer")

router.get("/", controller.home)
//routas do administrador
router.get('/admin/add', adminController.categoriaadd)
router.get('/admin/categoria', adminController.categoria)
router.post('/adicionar',adminController.adicionar)
router.post("/adicionar/nova", adminController.adicionarNova)
router.get("/categoria/editar/:id", adminController.editar)
router.get('/categoria/deletar/:id', adminController.deletar)
router.get("/postagem/adm", adminController.postagemadm)
router.get("/postagem/adm/deletar/:id", adminController.admdeletar)

//router de postagens de artigos
router.get('/postagem', postagens.home)
router.post("/postagem/nova",upload.single("foto"), postagens.nova)




module.exports = router