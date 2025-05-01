const express = require('express')
const mysql = require('mysql2');
const path = require('path');
const app = express()
const port = 3000


// // Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); 


//DB
// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'scsp', // Replace with your MySQL database name
  connectionLimit: 10, // Adjust as needed
});

// Function to execute a database query using the pool
function executeQuery(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

app.get('/students', async(req, res) => {
  // res.render('student/index', {
  //   title: 'Student',
  //   message: 'Hello Student'
  // })

  try {
    // Example query: Select all users from the 'users' table
    const query = 'SELECT * FROM student';
    const results = await executeQuery(query, []); // Pass an empty array for parameters
    // results = res.json(results); // Send the results as JSON
    
    console.log(results);
    res.render('student', {
      title: 'Students List',
      message: results.id
      
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
