
//IMPORT MYSQL2
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'attendance'
});
if(!db){
    console.log('database connection failed');
}
else{
    console.log("Database connected successfully");
}
//EXPORT DB CONNECTION
module.exports = db.promise();
