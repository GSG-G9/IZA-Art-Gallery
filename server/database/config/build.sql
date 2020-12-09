BEGIN;
DROP TABLE IF EXISTS artist,paint CASCADE;

CREATE TABLE artist (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  yearOfBirth INTEGER ,
  nationality VARCHAR(255),
  workStyle VARCHAR(255),
  picture TEXT
);
CREATE TABLE paint (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  yearOfMaking INTEGER ,
  artStyle VARCHAR(255),
  price INTEGER,
  picture TEXT ,
  artistId INTEGER REFERENCES artist(id) ON UPDATE CASCADE
);

INSERT INTO artist (name,yearOfBirth,nationality,workStyle,picture)
VALUES ('Vincent van Gogh',1853,'Dutch','Realism','https://www.biography.com/.image/t_share/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg');

INSERT INTO paint (name,yearOfMaking,artStyle,price,picture,artistId)
VALUES ('Vincent van Gogh paint',1853,'Modern Art',1000600,'https://www.biography.com/.image/t_share/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg',1);

COMMIT;