const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(process.env.PORT || 3000, () => console.log("servidor funcionando"));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register1", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/register1.html"));
});
app.get("/ofertas", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/ofertas.html"));
});
app.get("/register1", (req, res) =>{
    res.send(Formulario);
});
app.post("/crear", (req, res)=>{
    res.send("Carga de formulario")
});