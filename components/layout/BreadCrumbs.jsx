import Link from 'next/link';
import React from 'react';

const BreadCrumbs = ({ BreadCrumb }) => {
	return (
		<section className='py-5 sm:py-7 bg-blue-100'>
			<div className='container max-w-screen-xl mx-auto px-4'>
				<ol className='inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center'>
					{BreadCrumb.map((item, index) => (
						<li key={index} className='inline-flex items-center'>
							<Link
								href={item.url}
								className='text-gray-600 hover:text-blue-600'>
								{item.name}
							</Link>
							{BreadCrumb.length - 1 !== index ? (
								<i className='ml-3 text-gray-400 fa fa-chevron-right'></i>
							) : (
								''
							)}
						</li>
					))}
				</ol>
			</div>
		</section>
	);
};

export default BreadCrumbs;
