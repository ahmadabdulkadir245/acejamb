import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const username = req.body.username;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;
    const image = req.body.image;
    const newComment = {
      id: Date.now(),
      text: comment,
      username: username,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
