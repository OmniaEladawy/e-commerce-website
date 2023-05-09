import React from 'react';
import { Inter } from 'next/font/google';
import axios from 'axios';
import ListProducts from './../components/products/ListProducts';
import queryString from 'query-string';

const inter = Inter({ subsets: ['latin'] });

const getProducts = async (searchParams) => {
	console.log('searchParams', searchParams);
	const urlParams = {
		keyword: searchParams.keyword,
	};

	const searchQuery = queryString.stringify(urlParams);

	const { data } = await axios.get(
		`${process.env.API_URL}/api/products?${searchQuery}`
	);
	return data;
};

export default async function Home({ searchParams }) {
	const products = await getProducts(searchParams);

	return <ListProducts data={products} />;
}
