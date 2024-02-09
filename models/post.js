import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  arrivalDate: Date,
  arrivalAirport: String,
  dropOff: String,
  carPal: { type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true ,
})

const Post = mongoose.model('Post', postSchema)

export { Post }
