interface Config {
  baseURl: string;
  serverBaseUrl: string;
}

const config: Config = {
  // For client-side requests (browser)
  baseURl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api",
  // For server-side requests (NextAuth, etc.)
  serverBaseUrl: process.env.SERVER_API_URL || "http://localhost:5001/api",
};

export default config;
