INSERT INTO EntryCategory (id, description) VALUES (1, 'ZLI Module 223');
INSERT INTO role (id, description) VALUES (1, 'admin');
/* username: admin, password: 123 */
INSERT INTO applicationUser (id, username, password, role_id) VALUES (1, 'admin', '$2a$10$/RXVzWw8f1WakO4V5dCZUu.n7nIRtUHNtJUnvKaoqzZlOMUo0x.Ii', 1);

INSERT INTO entry (id, checkIn, checkOut, category_id, user_id) VALUES
    (1,'2020-09-10T10:00:00.000', '2020-09-10T10:20:00.000', 1, 1),
    (2,'2020-09-10T10:30:00.000', '2020-09-10T10:50:00.000', 1, 1),
    (3,'2020-09-10T11:10:00.000', '2020-09-10T11:50:00.000', 1, 1);