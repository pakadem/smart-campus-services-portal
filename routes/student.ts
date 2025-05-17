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
    res.render('student/index', { data: results });
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

//todo: Workaround until the route loader is done
//Announcements
interface RequestBody {
  message: string;
  created_time: Date;
}

const ANNOUNCE_TABLE = 'announcement';

app.get('/announcements', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ ANNOUNCE_TABLE;
    const results = await executeQuery(query, []); 
    res.render('announcement/index', { data: results });

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
    res.render('announcement/view', { data: results });

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
    const results = await executeQuery(query, [title, message]);
    // res.status(201).json(results);
    res.redirect('/announcements');
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

//Lecturers
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

app.post('/lecturer/:id', async(req: Request<{ id: number}, RequestBody> , res: Response ) => {
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

app.post('/lecturer_delete/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
    try {
      const id =  req.params.id;
      const query = 'DELETE FROM '+LECTURER_TABLE+' WHERE id =' +id;
      const results = await executeQuery(query, [id]);
      res.redirect('/lecturers');
    } catch (error) {
      console.error('Error Deleting users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

// Maintenances
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

// AdminStaff
interface RequestBody {
  username: string;
  name: string;
  surname: string;
  password: string;
  permission: number;
  course: string;
  module: string;
}

const ADMINSTAFF_TABLE = 'adminstaff';

app.get('/adminstaffs', async(req: Request<RequestBody> , res: Response) => {
try {
  const query = 'SELECT * FROM '+ ADMINSTAFF_TABLE;
  const results = await executeQuery(query, []); // Pass an empty array for parameters
 //res.json(results);
  res.render('adminstaff/index' , { data: results }); // Send the results as JSON

} catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
}
})

app.get('/adminstaff/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
try {
  const id = req.params.id;
  const query = 'SELECT * FROM '+ ADMINSTAFF_TABLE +' WHERE id ='+id;
  const results = await executeQuery(query, [id]); 
 // res.json(results);
 res.render('adminstaff/view', { data: results });

} catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ error: 'Failed to retrieve users' });
}
});

app.post('/adminstaff/create', async(req: Request<RequestBody> , res: Response) => {
try {
  const username = req.body.username;
  const name = req.body.name;
  const surname = req.body.surname;
  const password = req.body.password;
  const permission = req.body.permission;
  const course = req.body.course;
  const module = req.body.module;

  const query = "INSERT INTO "+ADMINSTAFF_TABLE+" (username, name, surname, password, permission, course, module) VALUES (?,?,?,?,?,?,? )";
  const results = await executeQuery(query, [username, name, surname, password, permission, course, module]);

  res.redirect('/adminstaff');
} catch (error) {
  console.error('Error Creating users:', error);
  res.status(500).json({ error: 'Failed to retrieve users' });
}
});

app.post('/adminstaff_update/:id', async(req: Request<{ id: number}, RequestBody> , res: Response ) => {
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
  const query = 'UPDATE '+ADMINSTAFF_TABLE+' SET username = ?, name = ?, surname = ?, password = ?, permission = ? WHERE id =' +id;
  const results = await executeQuery(query, [username, name, surname, password, permission]);
  const message = encodeURIComponent('Updated successfully!');
  res.redirect('/adminstaffs/'+ req.params.id +'?message=${message}');

} catch (error) {
  console.error('Error Updating users:', error);
  res.status(500).json({ error: 'Failed to retrieve users' });
}
});

app.post('/adminstaff_delete/:id', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const id =  req.params.id;
    const query = 'DELETE FROM '+ADMINSTAFF_TABLE+' WHERE id =' +id;
    const results = await executeQuery(query, [id]);
    res.redirect('/adminstaffs/');

  } catch (error) {
    console.error('Error Deleting users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

//Login
interface RequestBody {
  username: string;
  password: string;
  permission: number;
}
app.get('/login', async(req: Request<RequestBody> , res: Response) => {
  try {
   
   
    
    res.render('login/index' , { data: [] }); // Send the results as JSON 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to login, go back.' }); // Send an error response
  }
})

app.post('/auth', async(req: Request<RequestBody> , res: Response) => {
  try {
   
    const username = req.body.username;
    console.log(req.body);
    const password = req.body.password;
    const permission = req.body.permission;

    let results:any = 0;
    if(permission == 1){
      const query = "SELECT count(id) as amount FROM student WHERE username='"+username+"' AND password='"+password+"';";
      console.log(query);
      let results: any = await executeQuery(query, []);
      results[0].amount;
      if(results[0].amount){
        res.redirect('/');
      }
      console.log( results ==  '[ { amount: 1 } ]');
    }
    if (permission == 2) {
      const query = "SELECT count(id) FROM lecturer WHERE username='"+username+"' AND password='"+password+"';";
      let results: any = await executeQuery(query, []);
      results[0].amount;
      if(results[0].amount){
        res.redirect('/');
      }
    } 
    if (permission == 3) {
      const query = "SELECT count(id) FROM adminstaff WHERE username='"+username+"' AND password='"+password+"';";
      let results: any = await executeQuery(query, []);
      results[0].amount;
      if(results[0].amount){
        res.redirect('/');
      }
    } 
    if(results > 0){
      res.redirect('/');
    }else{
      res.status(500).json({ error: 'Failed to login, go back.' }); // Send an error response
    }
    
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to login, go back.' }); // Send an error response
  }
})


//Timetable
app.get('/timetable', async(req: Request<RequestBody> , res: Response) => {
  try {
    const query = 'SELECT * FROM '+ ADMINSTAFF_TABLE;
    const results = await executeQuery(query, []); // Pass an empty array for parameters
   //res.json(results);
    res.render('timetable/index' , { data: results }); // Send the results as JSON
  
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' }); // Send an error response
  }
  })

// Dashboard
interface ReportData {
  totalStudents: number;
  totalLecturers: number;
  totalAdminStaff: number;
  totalMaintenance: number;
  totalMaintananceCreated: number;
  totalMaintananceInprogress: number;
  totalMaintananceComplete: number;
}
// const totalLecturerResults: interface;
app.get('/', async(req: Request<{ id: number}, RequestBody> , res: Response) => {
  try {
    const totalStudents = 'SELECT COUNT(Username) AS total_student FROM student';
    const totalLecturer = 'SELECT COUNT(Username) AS total_lecturer FROM lecturer';
    const totalAdminstaff = 'SELECT COUNT(Username) AS total_adminstaff FROM adminstaff';

    const totalMaintanance = "SELECT count(id) FROM maintanance WHERE created_time BETWEEN '2025-05-01 03:04:28' AND '2025-05-30 03:04:28'";
    const totalMaintananceCreated = "SELECT count(id) FROM maintanance WHERE created_time BETWEEN '2025-05-01 03:04:28' AND '2025-05-30 03:04:28' AND  status='created'";
    const totalMaintananceInprogress = "SELECT count(id) FROM maintanance WHERE created_time BETWEEN '2025-05-01 03:04:28' AND '2025-05-30 03:04:28' AND  status='in-progress'";
    const totalMaintananceComplete = "SELECT count(id) FROM maintanance WHERE created_time BETWEEN '2025-05-01 03:04:28' AND '2025-05-30 03:04:28' AND  status='complete'";

    const [
      totalStudentsResults,
      totalLecturerResults,
      totalAdminStaffResults,
      totalMaintenanceResults,
      totalMaintananceCreatedResults,
      totalMaintananceInprogressResults,
      totalMaintananceCompleteResults,
    ] = await Promise.all([
      executeQuery(totalStudents, []),
      executeQuery(totalLecturer, []),
      executeQuery(totalAdminstaff, []),
      executeQuery(totalMaintanance, []),
      executeQuery(totalMaintananceCreated, []),
      executeQuery(totalMaintananceInprogress, []),
      executeQuery(totalMaintananceComplete, []),
    ]);

    // const reportData: ReportData = {
    //   totalStudents: totalStudentsResults?.total_student || 0,
    //   totalLecturers: totalLecturerResults[0]?.total_student || 0,
    //   totalAdminStaff: totalAdminStaffResults[0]?.total_student || 0,
    //   totalMaintenance: totalMaintenanceResults[0]?.total_student || 0,
    //   totalMaintananceCreated: totalMaintananceCreatedResults[0]?.total_student || 0,
    //   totalMaintananceInprogress: totalMaintananceInprogressResults[0]?.total_student || 0,
    //   totalMaintananceComplete: totalMaintananceCompleteResults[0]?.total_student || 0,
    // };

    const resultsStudents: any = await executeQuery(totalStudents,[]);
    const resultsLecturers: any = await executeQuery(totalLecturer,[]);
    const resultsAdminstaff: any = await executeQuery(totalLecturer,[]);
    console.log(resultsStudents[0].total_student);
    console.log(resultsLecturers[0].total_lecturer);
     console.log(resultsAdminstaff[0].total_adminstaff);
     const results = {
      'students' : resultsStudents[0].total_student
     }
    res.render('report/index', { data: results });

  } catch (error) {
    console.error('Error Deleting users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})