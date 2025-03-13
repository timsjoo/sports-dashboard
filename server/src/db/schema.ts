import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 32 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
