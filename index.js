import express from "express";
import bodyParser from 'body-parser';
import { MongoClient } from "mongodb";

//import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;
//const {MongoClient} = require('mongodb');
app.use(bodyParser.json());
//app.use('/users',usersRoutes);
const uri = "mongodb+srv://test:test@cluster0.sdlus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri);
//client.connect(() => console.log('Connected to mongo DB!'));
await client.connect();
await  listDatabases(client);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    //console.log("Databases:");
    //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    app.get('/getDatabases', (req, res) => res.send(databasesList));
};

app.get('/', (req, res) => res.send('Hello there!, look for /getDatabases URI to get a list of all DBs we have'));
app.listen(PORT,() => console.log(`Server is running on http://localhost:${PORT}`));