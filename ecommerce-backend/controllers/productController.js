const products = require('../data/products.json');

// Get all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// Get product by ID
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
