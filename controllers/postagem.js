 const mongoose = require("mongoose")
 require("../model/postagem")
const Postagem = mongoose.model("postagem")
require("../model/categoria")
const Categoria = mongoose.model("categorias")
module.exports = {
    home: function(req, res){
        Categoria.find().lean().then((categoria)=>{
            res.render("pagina/postagem", {categoria: categoria})
        })

        
    },
    nova: function(req, res)
    {   
        const postagem = {

            foto: req.file.filename,
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco,
            categoria: req.body.categoria
            
        }
        new Postagem(postagem).save().then(()=>{
            console.log("salvo postagem com sucesso");
             res.redirect('/')
        }).catch((err)=>{
            console.log("erro na postagem"+err)
        })
    
     }
}