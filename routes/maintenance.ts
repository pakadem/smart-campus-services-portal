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
    title: string;
    reporter: string;
    campus: string;
    building: string;
    room: number;
    status: string;
    message: string;
}

const MAINTANANCE_TABLE = 'maintanance';

app.get('/maintenances', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ MAINTANANCE_TABLE;
    const results = await executeQuery(query, []); // Pass an empty array for parameters
    res.render('maintenance/index', { data: results });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
})

app.get('/maintenance/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM '+ MAINTANANCE_TABLE +' WHERE id ='+id;
    const results = await executeQuery(query, [id]); 
    
    res.render('maintenance/view', { data: results });

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/maintenance/create', async(req: Request<RequestBody> , res: Response) => {
  try {
    const title = req.body.title;
    const reporter = req.body.reporter;
    const campus = req.body.campus;
    const building = req.body.building;
    const room = req.body.room;
    const status = req.body.status;
    const message = req.body.message;
  
    const query = "INSERT INTO "+MAINTANANCE_TABLE+" (title, reporter, campus, building, room, status, message) VALUES (?,?,?,?,?,?,? )";
    const results = await executeQuery(query, [title, reporter, campus, building, room, status, message]);
    
    res.redirect('/maintenances');

  } catch (error) {
    console.error('Error Creating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/maintenance_update/:id', async(req: Request<{ id: number}, RequestBody> , res: Response ) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const reporter = req.body.reporter;
    const campus = req.body.campus;
    const building = req.body.building;
    const room = req.body.room;
    const status = req.body.status;
    const message = req.body.message;

    //todo: allow to update only one value without affecting others
    const query = 'UPDATE '+MAINTANANCE_TABLE+' SET title = ?, reporter = ?, campus = ?, building = ?, room = ?, status = ?, message = ? WHERE id =' +id;
    const results = await executeQuery(query,  [title, reporter, campus, building, room, status, message]);
    
    res.redirect('/maintenances');

  } catch (error) {
    console.error('Error Updating users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.post('/maintenance_delete/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
    try {
      const id =  req.params.id;
      const query = 'DELETE FROM '+MAINTANANCE_TABLE+' WHERE id =' +id;
      const results = await executeQuery(query, [id]);
      // res.json(results);
  
      res.redirect('/maintenances');
    } catch (error) {
      console.error('Error Deleting users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

app.get('/maintenance/report', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
    try {
      const id = req.params.id;
      const query = 'SELECT * FROM '+ MAINTANANCE_TABLE +' WHERE id ='+id;
      const results = await executeQuery(query, [id]); 
      res.json(results);
  
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
