const express = require('express');
const bodyParser = require('body-parser');

const mainControl = require(__dirname + '/controllers/Ctrl');

const app = express();

app.use(bodyParser.json());


app.get("/api/jokes/random", mainControl.getJoke);
app.post("/api/jokes", mainControl.addFavorite);
app.get("/api/jokes", mainControl.getFavorites);
app.put("/api/jokes/:id", mainControl.editFavorite);
app.delete("/api/jokes/:id", mainControl.deleteFavorite);

const port = 3001;
app.listen( port, () => {console.log (`Listening on port ${port}`);});