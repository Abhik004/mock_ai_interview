/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://ai-interview-mocker_owner:PQCbg3Ypf8Ge@ep-shy-recipe-a750wo1w.ap-southeast-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
    }
  };