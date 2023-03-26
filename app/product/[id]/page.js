import React from 'react'
import ProductDetails from './../../../components/products/ProductDetails';
import axios from 'axios';

const getProduct = async (id) => {
	const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
	return data.product;
};

const ProductDetailsPage = async ({params}) => {
    const productDetails = await getProduct(params.id)
    
  return (
    <ProductDetails productDetails={productDetails}/>
  )
}

export default ProductDetailsPage