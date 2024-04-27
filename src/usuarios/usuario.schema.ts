import {model, Schema} from 'mongoose'
import {v4} from "uuid";

const usuarioSchema = new Schema({
    id: {
        type: Schema.Types.UUID,
        default: () => v4()
    },
    nome: String,
    senha: String,
    email: String,
    peso: Number
}, {
    timestamps: true
})

export default model('Usuario', usuarioSchema)