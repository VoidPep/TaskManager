import {Schema, model} from "mongoose";
import {Status} from "../enums/status.enum";
import {v4 as uuidv4} from "uuid";

const schema = new Schema({
    id: {
        type: Schema.Types.UUID,
        ref: 'Task',
        default: () => uuidv4()
    },
    titulo: String,
    descricao: String,
    data_conclusao: Date,
    tipo: String,
    status: {
        type: "String",
        required: true,
        enum: Object.values(Status)
    },
    categoria_id: {
        type: Schema.Types.UUID,
        required: false,
        ref: 'Categoria'
    },
    usuario_id: {
        type: Schema.Types.UUID,
        required: true,
        ref: 'Usuario'
    }
}, {timestamps: true});

export default model("Task", schema);