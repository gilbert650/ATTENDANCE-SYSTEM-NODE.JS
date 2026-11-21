// const mysql=require('mysql2');
const db=require('./db.js');
const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
//HOME PAGE ROUTE
app.get("/home", (req, res)=>{
   res.send("welcome to our Home page");
});
//ABOUT PAGE ROUTE
app.get("/about",(req,res)=>{
   res.send("This About page");
});
//INSERT NEW USER
app.post("/add",async(req,res)=>{
try {
   const {user_name,u_email,u_password}=req.body;
   const[result]=await db.query("INSERT INTO users(user_name,u_email,u_password) VALUES (?,?,?)",[user_name,u_email,u_password]);
      res.status(201).json({message:'New user inserted successfully'});
   
} catch (error) {
 res.status(500).json({error:error.message}) ;  
};
});
//SELECT ALL USERS
app.get("/users",async(req,res)=>{
   try {
      
   const[rows]= await db.query("SELECT id,user_name,u_email FROM users");
   res.status(200).json(rows);
} catch (error) {
 res.status(500).json({error:error.message});     
};
});
//UPDATE USERS BY ID
app.put("/update/:id",async(req,res)=>{
   try {
      const{id}=req.params;
      const{user_name,u_email}=req.body;
      const[result]=await db.query("UPDATE users SET user_name=?,u_email=? WHERE ID=?",
         [user_name,u_email,id]
      );
      if (result.affectedRows==0) {
         res.status(404).json({message:'User not found'});
         
      }
      res.status(200).json({message:'user updated successfully'});
   } catch (error) {
    res.status(500).json({error:error.message});  
   };
});
//SERVER LISTENING PORT
app.listen(port,()=>{
   console.log(`server is running on port: http://localhost:${port} `);
});