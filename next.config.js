/** @type {import('next').NextConfig} */
const withTwin = require("./withTwin.js");

const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = withTwin(nextConfig);
