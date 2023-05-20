const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const Categoria = new Schema({
    nome: {
        type: String,
        require: true
    }
})


mongoose.model("categorias", Categoria)