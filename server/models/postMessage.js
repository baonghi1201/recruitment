import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    color: String,
    size: String,
    price: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;