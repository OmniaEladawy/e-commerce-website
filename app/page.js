import { Inter } from 'next/font/google';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

const getProducts = async () => {
	const { data } = await axios.get(`${process.env.API_URL}/api/products`);
	return data;
};

export default async function Home() {
	const products = await getProducts();
	return (
		<main>
			<h1 className='text-red-500 text-center font-bold'>Hello Omnia</h1>
		</main>
	);
}
