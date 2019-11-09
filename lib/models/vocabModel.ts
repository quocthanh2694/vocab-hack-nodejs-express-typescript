import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const VocabSchema = new Schema({
    word: {
        type: String,
        required: 'Word is required',
    },
    meaning: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});