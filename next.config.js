/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // HomeUptick was merged into the Cash Offers case study.
      { source: "/work/homeuptick", destination: "/work/cash-offers", permanent: true },
    ];
  },
};

module.exports = nextConfig;
