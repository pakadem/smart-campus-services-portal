import express, { Request, Response } from 'express';
import { executeQuery } from '../database/db';
import path from 'path';
const app = express();
const port = 3000;

// // Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface RequestBody {
  message: string;
  created_time: Date;
}

const ANNOUNCE_TABLE = 'announcement';

app.get('/announcements', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ ANNOUNCE_TABLE;
    const results = await executeQuery(query, []); 
    res.json(results);

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})


app.get('/announcement/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM '+ ANNOUNCE_TABLE +' WHERE id ='+id;
    const results = await executeQuery(query, [id]); 
    res.json(results);

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/announcement/create', async(req: Request<RequestBody> , res: Response) => {
  try {
    const title = req.body.title;
    const message = req.body.message;
  
    const query = "INSERT INTO "+ANNOUNCE_TABLE+" (title, message) VALUES (?,?)";
    const results = await executeQuery(query, [title, title]);
    res.status(201).json(results);

  } catch (error) {
    console.error('Error Creating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.delete('/announcement/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id =  req.params.id;
    const query = 'DELETE FROM '+ANNOUNCE_TABLE+' WHERE id =' +id;
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

module.exports = app;