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


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint/handler for "/finance"
app.get('/finance', (req, res) => {
  res.json(simulatedData);
});

// POST endpoint to receive expenses data
app.post('/finance', (req, res) => {
  console.log(req.body); // Continue logging the data to the console for debugging

  // Create a new finance record from the request body
  const newExpense = {
    title: req.body.placeOfExpense, 
    category: req.body.categories.join(", "), 
    amount: "$" + req.body.amount, 
    type: req.body.modeOfPayment, 
    date: req.body.expenseDate 
  };

  // Add the new expense to the simulated data array
  simulatedData.push(newExpense);

  // Send a response back to the client
  res.status(201).json({ message: "Expense added successfully!" });
});


//Simulated Data from Index.html
const simulatedData = [
    {
      title: "March Grocery",
      category: "Groceries",
      amount: "$200",
      type: "Debit",
      date: "2024-04-01",
    },
    {
      title: "Utility Bill",
      category: "Utilities",
      amount: "$150",
      type: "Debit",
      date: "2024-04-02",
    },
    {
      title: "Movie Night",
      category: "Entertainment",
      amount: "$100",
      type: "Debit",
      date: "2024-04-03",
    },
  ];



  


//Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});