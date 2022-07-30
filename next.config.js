/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const config = {
  nextConfig,
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    );
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }

    Object.assign(config.resolve.fallback, {
      buffer: false,
      crypto: false,
      events: false,
      path: false,
      stream: false,
      string_decoder: false,
    });

    return config;
  },
};
module.exports = {
  basePath: "",
  config,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/stake",
        permanent: true,
      },
    ];
  },
  images: {
    loader: "akamai",
    path: "/",
  },
};
