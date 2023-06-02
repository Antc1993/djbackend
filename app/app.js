import express from "express";
import routers from "./src/router/index.router.js";
import { engine } from 'express-handlebars';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express()

app.use(express.json())
app.use(express.urlencoded( {extended: true}) )

app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get("/", async (req, res) => {
  res.render('pages/home');
})

app.get("/products", async (req, res) => {
  res.render('pages/products');
})

app.use("/api/", routers)
app.get('/api/', async (req, res) => {
  res.send("Welcome to Backend")
})

app.listen(8080, () => {
    console.log('Listening to 8080 Port');
})