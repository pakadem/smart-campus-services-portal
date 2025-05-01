
const express = require('express')
const mysql = require('mysql2');
const path = require('path');
const app = express()
const port = 3000

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