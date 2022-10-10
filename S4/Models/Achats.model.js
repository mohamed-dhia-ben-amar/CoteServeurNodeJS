import mongoose, { mongo } from 'mongoose';
const { Schema, model} = mongoose

const achatSchema = new Schema(
    {
        boughtDate: {
            type: String,
            required: false,
        },
        user : {
            type: Number,
            required: true
        },
        game : {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model ("achat", achatSchema)