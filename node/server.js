const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

app.get('/', async (req, res) => {
    const connection = await mysql.createConnection(config);
    await connection.query(`CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`);
    await connection.query(`INSERT INTO people(name) VALUES ('Jack Daniel')`);
    await connection.query(`INSERT INTO people(name) VALUES ('Ítalo Polazzi')`);
    await connection.query(`INSERT INTO people(name) VALUES ('Hermione Granger')`);

    const [rows] = await connection.query(`SELECT name FROM people`);
    const namesList = rows.map(row => `<li>${row.name}</li>`).join('');

    res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
    await connection.end();
});

app.listen(3000, () => {
    console.log('Node app running on port 3000');
});
