-- ============================================================
-- SUBRAMANI ENTERPRISES - DATABASE SCHEMA
-- ============================================================
-- Driving Services Business Website
-- This schema is intentionally simple (fresher-friendly).
-- No user/auth tables exist because the site has no login system.
-- ============================================================

CREATE DATABASE IF NOT EXISTS subramani_enterprises
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE subramani_enterprises;

-- ------------------------------------------------------------
-- Table: business_info
-- Stores the single business profile record used across the site.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS business_info (
    id                  BIGINT AUTO_INCREMENT PRIMARY KEY,
    business_name       VARCHAR(150)  NOT NULL,
    proprietor_name     VARCHAR(150)  NOT NULL,
    tagline             VARCHAR(255)  NULL,
    phone               VARCHAR(20)   NULL,   -- REPLACE with real number
    whatsapp            VARCHAR(20)   NULL,   -- REPLACE with real number
    address             VARCHAR(500)  NULL,   -- REPLACE with real address
    maps_url            VARCHAR(500)  NULL,   -- REPLACE with real Google Maps link
    udyam_enterprise_type   VARCHAR(50)  NULL,
    udyam_major_activity    VARCHAR(100) NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Table: services
-- The four core service offerings shown as cards on the site.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS services (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(150)  NOT NULL,
    short_description   VARCHAR(500) NULL,
    button_label    VARCHAR(100)  NULL,
    button_action   VARCHAR(50)   NULL,  -- e.g. CALL, VIEW_HOURLY, CONTACT, VIEW_VEHICLES
    display_order   INT           DEFAULT 0,
    active          BOOLEAN       DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Table: packages
-- Hourly / monthly package line items.
-- price_details is stored as-is (exactly as provided by client),
-- no computed/derived pricing logic is applied.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS packages (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    package_type    VARCHAR(30)   NOT NULL,  -- HOURLY or MONTHLY
    name            VARCHAR(150)  NOT NULL,
    timing          VARCHAR(100)  NULL,
    price_details   VARCHAR(255)  NULL,      -- e.g. "₹500 + ₹100"
    price_label     VARCHAR(255)  NULL,      -- e.g. "Base Charge + Additional Charge"
    notes           VARCHAR(255)  NULL,
    display_order   INT           DEFAULT 0,
    active          BOOLEAN       DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- Table: vehicle_categories
-- Normal / Premium / Luxury car categories.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS vehicle_categories (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    category_name   VARCHAR(100)  NOT NULL,
    description     VARCHAR(500)  NULL,
    price_note      VARCHAR(255)  NULL,
    display_order   INT           DEFAULT 0,
    active          BOOLEAN       DEFAULT TRUE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
