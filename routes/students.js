const express = require('express')
const mysql = require('mysql2');
const path = require('path');
const app = express()
const port = 3000

// // Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
function executeQuery(sql , params ) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err , results ) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
const STUDENT_TABLE = 'student';
app.get('/students', async(req , res ) => {
  try {
    const query = 'SELECT * FROM '+ STUDENT_TABLE;
    const results = await executeQuery(query, []); // Pass an empty array for parameters
    res.json(results); // Send the results as JSON

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})

app.get('/student/:id', async(req , res ) => {
  try {
    let id = req.params.id;
    let query = 'SELECT * FROM '+ STUDENT_TABLE +' WHERE id ='+id;
    let results = await executeQuery(query, [id]); 
    res.json(results);

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
})

app.post('/student/create', async(req , res ) =>{
  
  try {
    let username = req.body.username;
    let name = req.body.name;
    let surname = req.body.surname;
    let password = req.body.password;
    let permission = req.body.permission;
    let course = req.body.course;
    let module = req.body.module;
  
    let query = "INSERT INTO "+STUDENT_TABLE+" (username, name, surname, password, permission, course, module) VALUES (?,?,?,?,?,?,? )";
    let results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    res.status(201).json(results);

  } catch (error) {
    console.error('Error Creating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/student/:id/update', async(req , res ) => {
  try {
    let id = req.body.id;
    let username = req.body.username;
    let name = req.body.name;
    let surname = req.body.surname;
    let password = req.body.password;
    let permission = req.body.permission;
    let course = req.body.course;
    let module = req.body.module;


    //todo: allow to update only one value without affecting others
    const query = 'UPDATE '+STUDENT_TABLE+' SET username = ?, name = ?, surname = ?, password = ?, permission = ?, course = ?, module = ? WHERE id =' +id;
    const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    res.json(results);

  } catch (error) {
    console.error('Error Updating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/student/:id/delete', async(req , res ) => {
    try {
      let id = req.params.id;
      const query = 'DELETE FROM student WHERE id =' +id;
      const results = await executeQuery(query, [id]);
      res.json(results);
  
    } catch (error) {
      console.error('Error Deleting users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
