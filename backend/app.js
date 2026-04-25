const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'mariadb',
  user: process.env.MYSQL_USER || 'user',
  password: process.env.MYSQL_PASSWORD || 'test',
  database: process.env.MYSQL_DATABASE || 'appdb',
  port: 3306
};

app.get('/api/data', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.query('SELECT * FROM sample_table LIMIT 10;').catch(() => [ [] ]);
    await conn.end();
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Backend Node.js en place. Utilisez /api/data');
});

app.listen(PORT, () => {
  console.log(`Backend Node.js listening on port ${PORT}`);
});