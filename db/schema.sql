DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  description VARCHAR(255),
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  date_completed TIMESTAMP,
  date_deleted TIMESTAMP
);

CREATE INDEX name_idx
 ON tasks (name);

-- create an index

