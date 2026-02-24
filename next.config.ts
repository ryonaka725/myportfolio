import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repositoryName}` : "",
  assetPrefix: isGithubActions ? `/${repositoryName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repositoryName}` : "",
  },
};

export default nextConfig;
