/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: {
		DB_URI: 'mongodb://127.0.0.1:27017/ecommerce',
		API_URL: 'http://localhost:3000',
	},
};

module.exports = nextConfig;
