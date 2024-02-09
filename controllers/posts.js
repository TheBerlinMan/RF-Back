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

export {
  create,
 }