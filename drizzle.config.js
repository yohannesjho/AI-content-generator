/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://Content_owner:GDzF1sHk4QOA@ep-falling-lake-a5zieh23.us-east-2.aws.neon.tech/Content?sslmode=require"
    }
  };