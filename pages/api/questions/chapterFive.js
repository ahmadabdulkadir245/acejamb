import { chapterFive } from "../../../data/lifeChanger";

export default function handler(req, res) {
  res.status(200).json(chapterFive);
}
