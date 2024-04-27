import { Schema, model } from "mongoose"
import { v4 } from "uuid"

const schema = new Schema({
    id: {
        type: Schema.Types.UUID,
        default: () => v4()
    },
    nome: String,
    cor: String
},{ timestamps: true })

export default model("Categoria", schema)