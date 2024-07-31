import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/assets/:path*',
                destination: '/assets/:path*',
            },
            {
                source: '/images/:path*',
                destination: '/images/:path*',
            },
        ];
    },
    images: {
        domains: ['sertificate.nordicuniversity.org'],
    },
};

export default withNextIntl(nextConfig);