-- ============================================================
-- SUBRAMANI ENTERPRISES - SAMPLE / SEED DATA
-- ============================================================
-- Values marked "REPLACE_" are placeholders and MUST be updated
-- with real client information before going live.
-- Everything else below reflects the exact information provided
-- by the client. No prices, addresses or claims have been invented.
-- ============================================================

USE subramani_enterprises;

-- ------------------------------------------------------------
-- BUSINESS INFO
-- ------------------------------------------------------------
INSERT INTO business_info
    (business_name, proprietor_name, tagline, phone, whatsapp, address, maps_url,
     udyam_enterprise_type, udyam_major_activity)
VALUES
    ('Subramani Enterprises',
     'Subramaniyan R',
     'Driving Services',
     'REPLACE_WITH_REAL_PHONE_NUMBER',
     'REPLACE_WITH_REAL_WHATSAPP_NUMBER',
     'REPLACE_WITH_REAL_BUSINESS_ADDRESS',
     'REPLACE_WITH_REAL_GOOGLE_MAPS_URL',
     'Micro',
     'Services');

-- ------------------------------------------------------------
-- SERVICES (4 core services)
-- ------------------------------------------------------------
INSERT INTO services (name, short_description, button_label, button_action, display_order, active) VALUES
('Acting Drivers',
 'Experienced drivers available for personal, family and vehicle driving requirements.',
 'Contact for Driver', 'CALL', 1, TRUE),

('Hourly Package',
 'Flexible hourly driving services for customers who need an experienced driver for short-duration requirements.',
 'View Hourly Packages', 'VIEW_HOURLY', 2, TRUE),

('Monthly Package',
 'Convenient monthly driver packages for customers who require regular driving support.',
 'Contact Proprietor', 'CALL', 3, TRUE),

('All Model Cars – Experienced Drivers',
 'Experienced drivers available for different types of vehicles including normal, premium and luxury cars.',
 'Call for Rates', 'CALL', 4, TRUE);

-- ------------------------------------------------------------
-- PACKAGES - HOURLY
-- Night service timing: 10:00 PM to 6:00 AM
-- The exact meaning of each "+" amount has NOT been specified
-- by the client, so amounts are shown exactly as provided and
-- generically labelled "Base Charge + Additional Charge".
-- ------------------------------------------------------------
INSERT INTO packages (package_type, name, timing, price_details, price_label, notes, display_order, active) VALUES
('HOURLY', '4 Hours', '10:00 PM - 6:00 AM', '₹500 + ₹100', 'Base Charge + Additional Charge', NULL, 1, TRUE),
('HOURLY', '4 Hours', '10:00 PM - 6:00 AM', '₹700 + ₹150', 'Base Charge + Additional Charge', NULL, 2, TRUE),
('HOURLY', '4 Hours', '10:00 PM - 6:00 AM', '₹800 + ₹100', 'Base Charge + Additional Charge', NULL, 3, TRUE),
('HOURLY', 'Additional Hours', NULL, '₹100 + ₹150', 'Base Charge + Additional Charge', NULL, 4, TRUE),
('HOURLY', 'Local Outstation – 4 Hours', NULL, '₹700 + ₹100 + Food', 'Base Charge + Additional Charge + Food', NULL, 5, TRUE),
('HOURLY', 'Outstation Trip – One Way', NULL, '₹1,800 + Food', 'Base Charge + Food', NULL, 6, TRUE);

-- ------------------------------------------------------------
-- PACKAGES - MONTHLY
-- No monthly pricing was provided by the client, so no price
-- values are inserted. The frontend displays a "contact us" note.
-- ------------------------------------------------------------
INSERT INTO packages (package_type, name, timing, price_details, price_label, notes, display_order, active) VALUES
('MONTHLY', 'Monthly Driver Package', NULL, NULL, NULL,
 'Contact us for monthly package details and current rates.', 1, TRUE);

-- ------------------------------------------------------------
-- VEHICLE CATEGORIES
-- No vehicle-specific prices were provided; only the general note.
-- ------------------------------------------------------------
INSERT INTO vehicle_categories (category_name, description, price_note, display_order, active) VALUES
('Normal Cars', 'Experienced drivers for standard family and personal vehicles.',
 'Rates vary based on vehicle type, duration and service requirement.', 1, TRUE),

('Premium Cars', 'Experienced drivers for premium segment vehicles.',
 'Rates vary based on vehicle type, duration and service requirement.', 2, TRUE),

('Luxury Cars', 'Experienced drivers for luxury segment vehicles.',
 'Rates vary based on vehicle type, duration and service requirement.', 3, TRUE);
