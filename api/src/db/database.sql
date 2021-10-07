CREATE DATABASE prueba_banco_cognox;
USE prueba_banco_cognox;
CREATE TABLE client(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    identification VARCHAR(11) NOT NULL UNIQUE,
    name VARCHAR(125) NOT NULL,
    password SMALLINT NOT NULL
);

CREATE TABLE account
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    client_id INT NOT NULL REFERENCES client(id),
    cash FLOAT NOT NULL DEFAULT 0 CHECK(cash>=0)
);
ALTER TABLE account ADD FOREIGN KEY(client_id) REFERENCES client(id);
CREATE TABLE transactions
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    account_send_id INT NOT NULL REFERENCES account(id),
    account_get_id INT NULL DEFAULT NULL REFERENCES account(id),
    cash FLOAT NOT NULL CHECK(cash >= 1),
    date_transaction DATE NOT NULL DEFAULT CURRENT_DATE
)
