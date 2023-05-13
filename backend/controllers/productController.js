import Product from '../models/product';
import APIFilters from '../utils/APIFilters';

// add new product
export const newProduct = async (req, res, next) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		product,
	});
};

// get all products
export const getProducts = async (req, res, next) => {
	const resPerPage = 2;
	const productsCount = await Product.countDocuments();

	const apiFilters = new APIFilters(Product.find(), req.query)
		.search()
		.filter();

	let products = await apiFilters.query;
	const filteredProductsCount = products.length;

	apiFilters.pagination(resPerPage);

	products = await apiFilters.query.clone();

	res.status(200).json({
		productsCount,
		resPerPage,
		filteredProductsCount,
		products,
	});
};

// get product
export const getProduct = async (req, res, next) => {
	const product = await Product.findById(req.query.id);
	if (!product) {
		return res.status(404).json({
			error: 'Product not found.',
		});
	}
	res.status(200).json({
		product,
	});
};
