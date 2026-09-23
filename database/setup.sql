-- =====================================================================
-- BLESSINGS FOUNDATION & TRUST - DATABASE SETUP SCRIPT
-- Target Database: MySQL 8.x / 5.7+
-- Tool: MySQL Workbench / MySQL Command Line
-- =====================================================================

-- Step 1: Create Database
CREATE DATABASE IF NOT EXISTS blessings_foundation
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE blessings_foundation;

-- Step 2: Create Volunteers Table
CREATE TABLE IF NOT EXISTS volunteers (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(25) NOT NULL,
  address TEXT,
  interest VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Step 3: Create Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(25),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Step 4: Create Events Table
CREATE TABLE IF NOT EXISTS events (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  event_date VARCHAR(50) NOT NULL,
  location VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Step 5: Create Programs Table
CREATE TABLE IF NOT EXISTS programs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- =====================================================================
-- Step 6: Insert Seed Data for Programs and Events (Editable Placeholders)
-- =====================================================================

-- Seed Programs
INSERT INTO programs (title, description, image_url) VALUES
('Education Support Program', 'Supplying school kits, textbooks, uniforms, and after-school remedial tutoring to vulnerable children in underserved communities.', 'images/gallery1.jpg'),
('Healthcare Awareness Program', 'Organizing free basic health screening camps, diagnostic tests, pediatric nutrition sessions, and preventive health drives.', 'images/gallery2.jpg'),
('Women Empowerment Program', 'Vocational tailoring, embroidery, micro-business coaching, and financial literacy workshops to foster female self-reliance.', 'images/gallery3.jpg'),
('Community Support Program', 'Emergency disaster assistance, drinking water initiatives, and seasonal relief drives for marginalized neighborhoods.', 'images/gallery5.jpg'),
('Skill Development Program', 'Youth computer fundamentals, spoken communication workshops, and vocational preparation for job seekers.', 'images/gallery4.jpg'),
('Food & Essential Support Program', 'Nutritional grocery kits and ration packs provided to families facing economic hardship or distress.', 'images/gallery6.jpg')
ON DUPLICATE KEY UPDATE title=VALUES(title);

-- Seed Events
INSERT INTO events (title, event_date, location, description, image_url) VALUES
('Community Health & Vision Camp', '15 Oct 2026', 'Community Welfare Hall', 'Free physician consultations, blood pressure screening, diabetes tests, and optical screenings for senior citizens.', 'images/event1.svg'),
('Youth Education Kit Distribution', '28 Oct 2026', 'Govt High School Grounds', 'Distributing school bags, notebooks, textbooks, and geometry tools to over 300 primary grade students.', 'images/event2.svg'),
('Green Earth Tree Plantation', '12 Nov 2026', 'Suburban Community Park', 'Planting 500 indigenous fruit and shade saplings with local citizen volunteers and student teams.', 'images/event3.svg')
ON DUPLICATE KEY UPDATE title=VALUES(title);

-- Verification Query
SELECT 'Database setup completed successfully!' AS status;
SELECT COUNT(*) AS total_programs FROM programs;
SELECT COUNT(*) AS total_events FROM events;
