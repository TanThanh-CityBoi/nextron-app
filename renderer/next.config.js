/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config');

module.exports = {
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        return config;
    },
    i18n,
};
