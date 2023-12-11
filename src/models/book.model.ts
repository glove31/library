import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";


/* This is creating a new schema for the books model. */
let bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },

        author: {
            type: String,
            require: true,
        },

        price: {
            type: Number,
            require: true,
        },

        publishingDate: {
            type: Date,
            require: true,
            default: new Date(),
        },

        avalaible: {
            type: Boolean,
            require: true,
            default: true
        },

        quantity: {
            type:Number,
            require: true,
            default: 0
        }

    }
);

//{timestamps: true} //will give us the time at which the book was created and an update time when is been updated

bookSchema.plugin(mongoosePaginate); //pour faire la pagnination facilement

const book = mongoose.model("Book",bookSchema);

export default book;
