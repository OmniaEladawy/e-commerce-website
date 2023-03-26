import nc from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import {
	newProduct,
	getProducts,
	getProduct,
} from '@/backend/controllers/productController';

const handler = nc();

dbConnect();

handler.post(newProduct);
handler.get(getProducts);
handler.get(getProduct);

export default handler;
