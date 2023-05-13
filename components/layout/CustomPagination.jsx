'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Pagination from 'react-js-pagination';

const CustomPagination = ({ resPerPage, productsCount }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	let page = searchParams.get('page') || 1;
	page = Number(page);

	return (
		<div className='flex mt-20 justify-center'>
			<Pagination
				activePage={page}
				itemsCountPerPage={resPerPage}
				totalItemsCount={productsCount}
				onChange={handlePageChange}
			/>
		</div>
	);
};

export default CustomPagination;
