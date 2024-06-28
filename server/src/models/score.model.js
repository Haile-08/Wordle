import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  Name: {
    type: String,
    required: true,
    minlength: 1,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  guesses: {
    type: Number,
    required: true,
    default: 0,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  wordLength: {
    type: Number,
    required: true,
    min: 1,
  },
  repeated: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Score', scoreSchema);
