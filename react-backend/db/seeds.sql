\c pure_products

-- remove any records and start the id sequence back to 1
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;

-- add create tables here
CREATE TABLE categories (id SERIAL PRIMARY KEY, name TEXT, img_url TEXT);
CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT, description TEXT, img_url TEXT, price INTEGER, category_id INTEGER REFERENCES categories(id));
-- CREATE TABLE users ()

-- create category
INSERT INTO categories
  (name, img_url)
VALUES
  ('photography', 'http://res.cloudinary.com/daracell/image/upload/v1534018227/pure/square.jpg'),
  ('candles', 'http://res.cloudinary.com/daracell/image/upload/v1534018226/pure/candles.jpg');

-- create products
INSERT INTO products
  (name, description, img_url, price, category_id)
VALUES
  ('Square Prints', '4" x 4" photos', 'http://res.cloudinary.com/daracell/image/upload/v1534018227/pure/square.jpg', 10.00, 1),
  ('Photo Greeting Cards', 'Custom greeting cards', 'https://res.cloudinary.com/daracell/image/upload/v1534018226/pure/cards.jpg', 20.00, 1),
  ('Fine Art Prints', 'Print beautiful art', 'https://res.cloudinary.com/daracell/image/upload/v1534018226/pure/prints.jpg', 20.00, 1),
  ('Desk Calendar', '14 Month Calendar', 'https://res.cloudinary.com/daracell/image/upload/v1534018226/pure/calendar.jpg', 14.00, 1),
  ('Wood Poster Rails - 48"', 'Hang your beautiful art on the wall', 'https://res.cloudinary.com/daracell/image/upload/v1534018226/pure/woodposter.jpg', 60.00, 1),
  ('Linen Hardcover Book', 'Protect your memories in this well-made book', 'https://res.cloudinary.com/daracell/image/upload/v1534018226/pure/hardcover.jpg', 35.00, 1),
  ('Iridescent Jar Candle', 'Light up your nights with the sweet aroma of peaches', 'https://res.cloudinary.com/daracell/image/upload/v1534018227/pure/peaches.jpg', 15.00, 2),
  ('Ceramic Flower Candle', 'These cute floral candles make center pieces', 'https://res.cloudinary.com/daracell/image/upload/v1534018227/pure/flowers.jpg', 15.00, 2);


