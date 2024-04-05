//import express
const express = require('express');
//express instance
const app = express();
// Serve static files from the 'public' directory
app.use('/public', express.static('public'))

// GET endpoint/handler for "/finance"
app.get('/finance', (req, res) =>{
res.json(simulatedData);

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