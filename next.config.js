/** @type {import('next').NextConfig} */

// The latest versions of WalletConnect have caused problems because they are pulling (unneccessarily) in Node dependencies.
// https://github.com/wagmi-dev/wagmi/issues/2300#issuecomment-1541425648
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false }
        return config
    },
}

module.exports = nextConfig
