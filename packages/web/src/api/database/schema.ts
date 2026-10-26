import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Global Center Pharma — tables des formulaires du site.
 * Appliquer avec `bun run db:push` (depuis packages/web).
 */

const createdAt = () =>
  integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date());

/** Messages envoyés depuis la page Contact */
export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  lang: text("lang").notNull().default("fr"),
  createdAt: createdAt(),
});

/** Demandes de partenariat / distribution */
export const partnershipRequests = sqliteTable("partnership_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  company: text("company").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  country: text("country").notNull(),
  activity: text("activity").notNull(),
  volume: text("volume"),
  message: text("message"),
  lang: text("lang").notNull().default("fr"),
  createdAt: createdAt(),
});

/** Demandes de devis */
export const quoteRequests = sqliteTable("quote_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone"),
  products: text("products").notNull(),
  quantity: text("quantity"),
  message: text("message"),
  lang: text("lang").notNull().default("fr"),
  createdAt: createdAt(),
});

/** Abonnés newsletter */
export const newsletterSubscribers = sqliteTable("newsletter_subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  lang: text("lang").notNull().default("fr"),
  createdAt: createdAt(),
});

