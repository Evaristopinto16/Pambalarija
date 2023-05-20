const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Postagem = new Schema({
    foto: {
        type: String,
        require: true
    },
     
    nome: {
        type:String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    preco:{
        type: String,
        require: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: "categorias",
        require: true
    }

})

mongoose.model("postagem", Postagem)