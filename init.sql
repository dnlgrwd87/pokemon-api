CREATE TABLE pokemon
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    pokedex_id text NOT NULL,
    image_url text
);

CREATE TABLE trainer
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL
);

INSERT INTO pokemon (name, pokedex_id, image_url)
VALUES  ('fennekin', '653', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png');