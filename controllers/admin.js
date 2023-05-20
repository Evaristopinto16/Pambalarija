const mongoose = require("mongoose")
require("../model/categoria")
const Categoria = mongoose.model("categorias")
require("../model/postagem")
const Postagem = mongoose.model("postagem")

module.exports = {
    categoria: function(req, res){
          Categoria.find().lean().then((categoria)=>{
            res.render("admin/categoria", {categoria: categoria})
          })
    },
    categoriaadd: function(req, res){
        res.render("admin/categoriaadd")
    },
    editar: function(req, res){
        Categoria.findById({_id: req.params.id}).lean().then((categoria)=>{
            res.render("admin/categoriaedit",{categoria: categoria})
        })
    },
    deletar: function(req, res){
        Categoria.remove({_id: req.params.id}).then(()=>{
                res.redirect("/admin/categoria")
        })

    },
    adicionar: function(req, res){
       const saveCategoria = {
            nome: req.body.nome
       }
       new Categoria(saveCategoria).save().then(()=>{
        console.log("salvo na base de dados com sucesso")
        res.redirect("/admin/categoria")
       }).catch((err)=>{
        console.log("erro ao salvar dados na base de dados "+err)
       })

    },
    adicionarNova: function(req, res){
        Categoria.findOne({_id: req.body.id}).then((categoria)=>{

            categoria.nome = req.body.nome;
            categoria.save().then(()=>{
                console.log("editado com suceso")
                res.redirect("/admin/categoria")
            })
        })
     },
     postagemadm: function(req, res){
        Postagem.find().lean().populate('categoria').then((postagem)=>{
            res.render("admin/postagemadm", {postagem: postagem})
        })
     },
     admdeletar: function(req, res){
        Postagem.remove({_id: req.params.id}).then(()=>{
            res.redirect("/postagem/adm")
        })
     }
}