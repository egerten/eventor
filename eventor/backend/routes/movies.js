
var fs = require('fs');
var express = require('express');
var router = express.Router();
var movies = fs.readFileSync('./movies.json', 'utf-8');
movies = JSON.parse(movies);
/* GET users listing. */
router.get('/', function (req, res, next) {
    var newMovie = req.query;
    if (!newMovie.title) return res.send(movies);
    newMovie.id = movies.length + 1;
    movies.push(newMovie);

    fs.writeFileSync('./movies.json', JSON.stringify(movies));

    res.send(movies);
});
router.get('/:id', (req, res) => {
    var movie = movies.find(p => p.id = req.params.id);
    if (movie) res.send(movie);
    else res.sendStatus(404);
});
router.post('/', function (req, res, next) {
    var newMovie = req.body;
    if (!newMovie.title) return res.send(400, 'Invalid');
    newMovie.id = movies.length + 1;
    movies.push(newMovie);

    fs.writeFileSync('./movies.json', JSON.stringify(movies));
    res.end();
});
module.exports = router;
