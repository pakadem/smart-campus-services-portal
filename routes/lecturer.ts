import express, { Router, Request, Response } from 'express';
import { executeQuery } from '../database/db';
import path from 'path';
const app = express();
const port = 3000;
const router = Router();
// // Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB
// Create a MySQL connection pool
const LECTURER_TABLE = 'lecturer';

interface RequestBody {
    username: string;
    name: string;
    surname: string;
    password: string;
    permission: number;
    course: string;
    module: string;
}

router.get('/lecturers', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ LECTURER_TABLE;
    const results = await executeQuery(query, []); // Pass an empty array for parameters
    res.json(results); // Send the results as JSON

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})

router.get('/lecturer/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM '+ LECTURER_TABLE +' WHERE id ='+id;
    const results = await executeQuery(query, [id]); 
    res.json(results);

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

router.post('/lecturer/create', async(req: Request<RequestBody> , res: Response) => {
  try {
    const username = req.body.username;
    const name = req.body.name;
    const surname = req.body.surname;
    const password = req.body.password;
    const permission = req.body.permission;
    const course = req.body.course;
    const module = req.body.module;
  
    const query = "INSERT INTO "+LECTURER_TABLE+" (username, name, surname, password, permission, course, module) VALUES (?,?,?,?,?,?,? )";
    const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    res.status(201).json(results);

  } catch (error) {
    console.error('Error Creating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

router.put('/lecturer/:id', async(req: Request<{ id: number}, RequestBody> , res: Response ) => {
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
    const query = 'UPDATE '+LECTURER_TABLE+' SET username = ?, name = ?, surname = ?, password = ?, permission = ?, course = ?, module = ? WHERE id =' +id;
    const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    res.json(results);

  } catch (error) {
    console.error('Error Updating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

router.delete('/lecturer/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
    try {
      const id =  req.params.id;
      const query = 'DELETE FROM '+LECTURER_TABLE+' WHERE id =' +id;
      const results = await executeQuery(query, [id]);
      res.json(results);
  
    } catch (error) {
      console.error('Error Deleting users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

router.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default router;