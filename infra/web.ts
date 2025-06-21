const region = aws.getRegionOutput().name;

const clerkPublic = new sst.Secret("ClerkPublicKey");
const clerkSecret = new sst.Secret("ClerkSecretKey");
const tursoDatabaseUrl = new sst.Secret("TURSO_DATABASE_URL");
const tursoAuthToken = new sst.Secret("TURSO_AUTH_TOKEN");
const stage = process.env.SST_STAGE;
export const frontend = new sst.aws.Astro("Frontend", {
  path: "packages/frontend",
  link: [clerkPublic, clerkSecret, tursoDatabaseUrl, tursoAuthToken],
  environment: {
    ASTRO_STAGE: stage,
    ASTRO_REGION: region,
    TURSO_DATABASE_URL: tursoDatabaseUrl.value,
    TURSO_AUTH_TOKEN: tursoAuthToken.value,
    PUBLIC_CLERK_PUBLISHABLE_KEY: clerkPublic.value,
    CLERK_SECRET_KEY: clerkSecret.value,
    CLERK_SIGN_IN_URL: "/sign-in",
    // ASTRO_API_URL: api.url,
  },
  domain: {
    name: process.env.ASTRO_APP_DOMAIN,
    dns: false,
    cert: process.env.FE_ACM_CERT_ARN,
  },
});
