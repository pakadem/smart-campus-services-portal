import express from 'express';
// import { app }  from './routes/announcement';
const app = express()
const port = 3000

app.use(express.static("public"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/announcement', app);

// POST a JSON object and get it back
// app.post('/demo-object', (res, response) => {

//     const body = res.body;
  
//     return body;
//   });
  
//   // GET with the id and get it back
//   app.get('/demo-object/:id', (res, response) => {
    
//     const params = res.params;
  
//     return response.json(params);
//   });
  
//   // GET with query in the URI and get it back
//   app.get('/demo-object', (res, response) => {
//       res.send('Hello object!')
//     const params = res.query;
  
//     return response.json(query);
//   });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

