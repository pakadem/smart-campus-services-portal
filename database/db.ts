import mysql from 'mysql2';

// DB - Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'scsp', // Replace with your MySQL database name
  connectionLimit: 10, // Adjust as needed
});

// Function to execute a database query using the pool
function executeQuery(sql:string , params:Array<string | number> ) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err:any , results:string|any) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export {executeQuery};