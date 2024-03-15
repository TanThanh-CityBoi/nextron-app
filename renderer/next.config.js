/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        return config;
    },
    i18nConfig: {
        locales: ['en', 'vi'],
        defaultLocale: 'vi',
        pages: {
            '*': ['common', 'home'],
        },
    },
});
