export const addProduct = (req, res) => {
  // Check if user has permission
  // Upload the product image
  // validate the product information
  // Save product information in the database
  // Return respond
  res.json(req.body);
};

export const getProducts = (req, res) => {
  res.send("All products!");
};

export const countProducts = (req, res) => {
  res.send("All product count!");
};

export const updateProduct = (req, res) => {
  res.send(`Product with id ${req.params.id} updated`);
};

export const deleteProduct = (req, res) => {
  res.send(`product with id ${req.params.id} deleted`);
};
