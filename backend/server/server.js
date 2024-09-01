const express = require('express'); 
const app = express(); 
const cors = require("cors"); 
const port = 3005  

//database 
const pool = require('../db/db')

// configuration
app.use(express.json()) 
app.use(cors())


//routes 

//get all todos  
app.get('/api/todos', async (req, res)=>{

try{
    const todos =  await pool.query('SELECT * FROM todos;')  
    console.log(todos)
}catch(err)
{
    console.error(err.message)
}


})



//start server 

app.listen(port, ()=>{ 
    console.log(`Server is running on port ${port}`)
})

