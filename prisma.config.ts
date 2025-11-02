// prisma.config.ts (или .mts/.cts)
import "dotenv/config"; // ← добавь ЭТУ строку первой!
import { defineConfig, env } from "@prisma/config"; // ← обрати внимание: @prisma/config

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  engine: "classic",
  // Можно вообще убрать блок datasource — URL уже читается в schema.prisma через env()
  // Если хочешь оставить, то так:
  datasource: {
    url: env("DATABASE_URL"), // берётся из process.env.DATABASE_URL
    directUrl: env("DIRECT_URL"), // если используешь DIRECT_URL
  },
});
