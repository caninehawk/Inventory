const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

const itemsRouter = require('./routes/items.js');
const categoriesRouter = require('./routes/categories.js');

app.use('/items', itemsRouter);
app.use('/categories', categoriesRouter);

mongoose.connect(uri).then(
    app.listen(port, ()=>{
        console.log("server started!!");
    })
)