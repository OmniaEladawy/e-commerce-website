import Product from '../models/product';

// add new product
export const newProduct = async (req, res, next) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		product,
	});
};

// get all products
export const getProducts = async (req, res, next) => {
	const products = await Product.find();
	res.status(200).json({
		products,
	});
};
