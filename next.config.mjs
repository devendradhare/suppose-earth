/** @type {import('next').NextConfig} */

// module.exports = {
// };

const nextConfig = {
  // env: {
  //   apiKey: process.evn.NEXT_PUBLIC_API_KEY,
  //   authDomain: process.evn.NEXT_PUBLIC_AUTHDOMAIN,
  //   projectId: process.evn.NEXT_PUBLIC_PROJECTID,
  //   storageBucket: process.evn.NEXT_PUBLIC_STORAGEBUCKET,
  //   messagingSenderId: process.evn.NEXT_PUBLIC_MESSAGINGSENDERID,
  //   appId: process.evn.NEXT_PUBLIC_APPID,
  //   measurementId: process.evn.NEXT_PUBLIC_MEASUREMENTID,
  // },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.seasky.org",
      },
      {
        protocol: "https",
        hostname: "science.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        // "https://lh3.googleusercontent.com/a/ACg8ocIO2gRb8ukEJVMDdGFXKDma0WELvOpnH95jlZhpMaIozeT0Byw=s96-c"
      },
    ],
  },
};

export default nextConfig;
