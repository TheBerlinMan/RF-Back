import { Profile } from "../models/profile.js"
import { Post } from "../models/post.js"


async function create(req, res){
  try {
    req.body.carPal = req.user.profile
    const post = await Post.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { posts: post } },
      { new: true }
    )
    post.carPal = profile
    res.json(post)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function index(req, res){
  try {
    const posts = await Post.find({})
    .populate('carPal')
    .sort({ createdAt: 'desc' })
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function show(req, res){
  try {
    const post = await Post.findById(req.params.postId)
    .populate('carPal')
    res.json(post)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function update(req, res){

}

export {
  create,
  index,
  show,
  update,
 }