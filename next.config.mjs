import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,  // Fayllarning nomiga '/' qo'shadi
    generateStaticParams() {
        return [
            { locales: 'en' },
            { locales: 'uz' }
        ];
    }
};

export default withNextIntl(nextConfig);