import {Schema, model} from "mongoose";
import {Status} from "../enums/status.enum";
import {v4 as uuidv4} from "uuid";

const schema = new Schema({
    id: {
        type: Schema.Types.UUID,
        default: () => uuidv4()
    },
    titulo: String,
    descricao: String,
    data_conclusao: Date,
    tipo: String,
    status: {
        type: String,
        required: true,
        enum: [Status.CONCLUIDA, Status.EM_ANDAMENTO, Status.PENDENTE]
    },
    categoria_id: {
        type: Schema.Types.UUID,
        required: false
    },
    usuario_id: {
        type: Schema.Types.UUID,
        required: true,
    }
}, {timestamps: true});

export default model("Task", schema);