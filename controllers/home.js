const mongosse = require("mongoose")
require("../model/postagem")
const Postagem =  mongosse.model("postagem")
module.exports = {
    home: function(req, res){
        Postagem.find().lean().then((postagens)=>{
            res.render("index", {postagens: postagens})
        })
    }
}