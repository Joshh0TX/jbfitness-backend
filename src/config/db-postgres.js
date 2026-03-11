import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const sql = postgres(connectionString, {
  ssl: process.env.PGSSL !== "false" ? "require" : false,
  max: 10,
  idle_timeout: 30,
  connect_timeout: 10,
});

async function testConnection() {
  try {
    const result = await sql`SELECT 1 as test`;
    console.log("✅ Postgres connection successful");
    return true;
  } catch (error) {
    console.error("❌ Postgres connection failed:", error.message);
    return false;
  }
}

export { sql, testConnection };
export default sql;
