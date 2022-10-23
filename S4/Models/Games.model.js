import mongoose, { mongo } from 'mongoose';
const { Schema, model } = mongoose

/* export default class Game {
    constructor (id, title, description, price, quantity) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
} */

const gameSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image:
        {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        onSale: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model("Game", gameSchema)