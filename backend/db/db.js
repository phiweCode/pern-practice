const  pg = require('pg'); 
const {Pool} = pg; 

const pool = new Pool({
    user: 'siphiwe',
    host: 'localhost',
    database: 'todoit',
    password: 'admin1',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
}) 


// const result = async () => await pool.query('INSERT INTO todos(todo_title, todo_description) VALUES ($1, $2) RETURNING *', ['Learning', 'I have to learn poooling and more']) 

// console.log(result())  

module.exports = pool; 