--
-- SQLite (Insert master data)
--

--
-- User
--

INSERT INTO users (name, password, email, roles)
VALUES ('Susi', '-test1234', 'susi@test.de', '["admin", "user"]');
INSERT INTO users (name, password, email, roles)
VALUES ('Berti', '-test1234', 'berti@test.de', '["user"]');


--
-- Setting
--

INSERT INTO settings (name, value, type, description)
VALUES ('access.code.admin', 'BikeAdmin', 'string', 'The access code for the admin user role');
INSERT INTO settings (name, value, type, description)
VALUES ('access.code.user', 'BikeFriend', 'string', 'The access code for the normal user role');

--
-- Tasks
--

INSERT INTO tasks (task, title, description, color, status, data)
VALUES ('battery.load', 'Load Battry', 'The battery is loading with power', '#CCFFCC', 1, '{"average": { "type": "number", "label": "average"}, "rest": { "type": "number", "label", "rest" }}');
INSERT INTO tasks (task, title, description, color, status, data)
VALUES ('air.pressure.check', 'Air Pressure Check', 'Check the air pressure on the wheels', '#00CC00', 1, '{"frontWheel": { "type": "boolean", "label": "frontwheel"}, "rearWheel": { "type": "boolean", "label": "rearwheel" }}');
INSERT INTO tasks (task, title, description, color, status, data)
VALUES ('inspection', 'Inspection', 'Make an inspection', '#00CCCC', 1, '{"dealer": {"type": "boolean", "label": "dealer"}}');
INSERT INTO tasks (task, title, description, color, status, data)
VALUES ('cleaning', 'Cleaning', 'Cleaning the bicycle', '#FFFFCC', 1, '{"note": {"type": "string", "label": "note"}}');
