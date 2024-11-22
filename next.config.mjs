/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // SVGR 설정 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // SVGR 옵션 설정
            dimensions: false,
            typescript: true,
            memo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      removeTitle: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  sassOptions: {
    additionalData: `@import "@/styles/variables.scss";`,
  },
};

export default nextConfig;
