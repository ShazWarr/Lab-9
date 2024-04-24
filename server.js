// Import express
const express = require('express');
const cors = require('cors');

// Create an express instance
const app = express();
// Serve static files from the 'public' directory
app.use('/public', express.static('public'));
app.use(cors({
  methods: ['GET', 'POST'], // Allow only certain methods

}));

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("data/lab9DB.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint/handler for "/finance"
app.get('/finance', (req, res) => {
  db.all("SELECT * FROM finance", [], (err, rows) => {
    if (err) {
        res.status(500).send('Failed to retrieve data from the database.');
        console.error(err.message);
    } else {
        res.json(rows);
    }
});
});

//POST endpoint/Hanlder for "/finance"
app.post('/finance', (req, res) => {
  const { title, category, amount, type, date } = req.body;
  db.run(`INSERT INTO finance (title, category, amount, type, date) VALUES (?, ?, ?, ?, ?)`, [title, category, amount, type, date], (err) => {
      if (err) {
          res.status(500).send('Failed to add new record.');
          console.error(err.message);
      } else {
          res.status(201).json({ message: "Expense added successfully!" });
      }
  });
});






//Start
const PORT = process.env.PORT || 3000;  // Set default port to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});