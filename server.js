const express=require("express");
const app= express();
const port=5000;
app.use(express.json());
app.get('/student/1',(req,res)=>{
res.send("MY NAMES AHEZA UKURI");
});
app.listen(port,()=>{
    console.log(`our server is running on port http://${port}`);
});
app.get("/products", (req, res) => {
    res.json({
        message: "All products"
    });
});