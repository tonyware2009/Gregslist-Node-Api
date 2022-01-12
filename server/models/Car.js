import mongoose from "mongoose"
const Schema = mongoose.Schema

export const CarSchema = new Schema(
  {
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true, default: 'https://placehold.it/300x300' },
    creatorId: {
      type: Schema.Types.ObjectId, ref:
        'Profile', required: true
    }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)


CarSchema.virtual('creator', {

  localField: 'creatorId',

  foreignField: '_id',

  ref: 'Profile',

  justOne: true

})