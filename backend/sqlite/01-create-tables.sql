--
-- SQLite
-- Create the tables
--

--
-- Users
--

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  roles NOT NULL
);

--
-- Tasks (The tasks for doing with the bicycle)
--

DROP TABLE IF EXISTS tasks;

CREATE TABLE IF NOT EXISTS tasks (
  task_id INTEGER PRIMARY KEY AUTOINCREMENT,
  task TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT DEFAULT NULL,
  color TEXT NOT NULL,
  status INTEGER NOT NULL DEFAULT 1,
  data TEXT
);

--
-- Bicycles (The bicycle information)
--

DROP TABLE IF EXISTS bicycles;

CREATE TABLE IF NOT EXISTS bicycles (
  bicycle_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  brand TEXT NOT NULL,
  product TEXT NOT NULL,
  purchase TEXT,
  data TEXT,
  UNIQUE (user_id, bicycle_id)
);


--
-- Events (Doings on the bicycles)
--

DROP TABLE IF EXISTS events;

CREATE TABLE IF NOT EXISTS events (
  event_id INTEGER PRIMARY KEY AUTOINCREMENT,
  bicycle_id INTEGER NOT NULL,
  task_id INTEGER NOT NULL,
  mileage INTEGER NOT NULL,
  data TEXT,
  UNIQUE (bicycle_id, event_id)
);

DROP INDEX IF EXISTS idx_event_tasks;

CREATE INDEX IF NOT EXISTS idx_event_tasks
ON events (task_id);

--
-- Images (The image for the bicycles or events)
--

DROP TABLE IF EXISTS images;

CREATE TABLE IF NOT EXISTS images (
  image_id INTEGER PRIMARY KEY AUTOINCREMENT,
  bicycle_id INTEGER NOT NULL,
  event_id INTEGER DEFAULT NULL,
  data BLOB
);

--
-- Settings
--

DROP TABLE IF EXISTS settings;

CREATE TABLE IF NOT EXISTS settings (
  setting_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT CONSTRAINT uq_setting_names UNIQUE NOT NULL,
  value TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL
);
