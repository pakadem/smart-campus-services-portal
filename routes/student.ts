import express, { Request, Response } from 'express';
import { executeQuery } from '../database/db';
import path from 'path';
const app = express();
const port = 3000;

// // Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));
interface RequestBody {
    username: string;
    name: string;
    surname: string;
    password: string;
    permission: number;
    course: string;
    module: string;
}

const STUDENT_TABLE = 'student';

app.get('/students', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ STUDENT_TABLE;
    const results = await executeQuery(query, []); // Pass an empty array for parameters
    //res.json(results); // Send the results as JSON
    res.render('student/index', { data: results })
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})

app.get('/student/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM '+ STUDENT_TABLE +' WHERE id ='+id;
    const results = await executeQuery(query, [id]); 
    // res.json(results);
    res.render('student/view', { data: results });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/student/create', async(req: Request<RequestBody> , res: Response) => {

  console.log("req.body: ");
  console.log(req);
  try {
    const username = req.body.username;
    const name = req.body.name;
    const surname = req.body.surname;
    const password = req.body.password;
    const permission = req.body.permission;
    const course = req.body.course;
    const module = req.body.module;

  
    const query = "INSERT INTO "+STUDENT_TABLE+" (username, name, surname, password, permission, course, module) VALUES (?,?,?,?,?,?,? )";
    const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    
    // res.status(201).json(results);
    res.redirect('/students');

  } catch (error) {
    console.error('Error Creating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/student_update/:id', async(req: Request<{ id: number}, RequestBody> , res: Response ) => {
  try {
    const id = req.params.id;
    const username = req.body.username;
    const name = req.body.name;
    const surname = req.body.surname;
    const password = req.body.password;
    const permission = req.body.permission;
    const course = req.body.course;
    const module = req.body.module;

    //todo: allow to update only one value without affecting others
    const query = 'UPDATE '+STUDENT_TABLE+' SET username = ?, name = ?, surname = ?, password = ?, permission = ?, course = ?, module = ? WHERE id =' +id;
    const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    // var resultsJson = res.json(results);
    // const statusCode = resultsJson.statusCode;
    const message = encodeURIComponent('Updated successfully!');
    res.redirect('/student/'+ req.params.id +'?message=${message}'); 

  } catch (error) {
    console.error('Error Updating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/student_delete/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
    try {
      const id =  req.params.id;
      const query = 'DELETE FROM '+STUDENT_TABLE+' WHERE id =' +id;
      const results = await executeQuery(query, [id]);
      res.redirect('/students');
    } catch (error) {
      console.error('Error Deleting users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
