import { products } from "../../../data/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const category = req.body.category;
    const price = req.body.price;
    const image = req.body.image;
    const quantity = req.body.quantity;
    const description = req.body.description;
    const prime = req.body.prime;

    const newProduct = {
      id: Date.now(),
      title: title,
      category: category,
      price: price,
      image: image,
      quantity: quantity,
      prime: prime,
      description: description,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
}
