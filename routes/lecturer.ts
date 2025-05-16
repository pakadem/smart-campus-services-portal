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


app.use(express.static(path.join(__dirname, '../public')));
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

app.get('/lecturers', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ LECTURER_TABLE;
    const results = await executeQuery(query, []); // Pass an empty array for parameters
     res.render('lecturer/index', { data: results });

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})

app.get('/lecturer/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM '+ LECTURER_TABLE +' WHERE id ='+id;
    const results = await executeQuery(query, [id]); 
    res.render('lecturer/view', { data: results });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/lecturer/create', async(req: Request<RequestBody> , res: Response) => {

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
  
    const query = "INSERT INTO "+LECTURER_TABLE+" (username, name, surname, password, permission, course, module) VALUES (?,?,?,?,?,?,? )";
    const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);
    res.redirect('/lecturer');

  } catch (error) {
    console.error('Error Creating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/lecturer_update/:id', async(req: Request<{ id: number}, RequestBody> , res: Response ) => {
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
   const message = encodeURIComponent('Updated successfully!');
    res.redirect('/lecturer/'+ req.params.id +'?message=${message}'); 

  } catch (error) {
    console.error('Error Updating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/lecturer_delete/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
    try {
      const id =  req.params.id;
      const query = 'DELETE FROM '+LECTURER_TABLE+' WHERE id =' +id;
      const results = await executeQuery(query, [id]);
      res.redirect('/lecturer');
    } catch (error) {
      console.error('Error Deleting users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
