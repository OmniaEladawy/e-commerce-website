import { Inter } from 'next/font/google';
import axios from 'axios';
import ListProducts from './../components/products/ListProducts';

const inter = Inter({ subsets: ['latin'] });

const getProducts = async () => {
	const { data } = await axios.get(`${process.env.API_URL}/api/products`);
	return data;
};

export default async function Home() {
	const products = await getProducts();
	return <ListProducts data={products} />;
}
