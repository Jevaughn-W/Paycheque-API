INSERT INTO provinces (name)
  VALUES 
    (Ontario),
    (Quebec);

INSERT INTO users (name, email, password, province_id, salary)
  VALUES
    ('Jevaughn', 'jevaughn.williamsx@gmail.com', 'test', 1, 50000);

INSERT INTO rates (rate)
  VALUES 
   (0.0505),
   (0.0915),
   (0.1116),
   (0.14),
   (0.19),
   (0.24),
   (0.2575);

INSERT INTO salaries (province_id, rate_id, salary)
  VALUES
    (1, 1, 46226)
    (1, 2, 46226)
    (1, 3, 150000),
    (2, 4, 49275),
    (2, 5, 98540),
    (2, 6, 119910),
    (2, 7, 119910);