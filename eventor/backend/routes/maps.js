
var fs = require('fs');
var express = require('express');
var router = express.Router();
var movies = fs.readFileSync('./movies.json', 'utf-8');
var musics = fs.readFileSync('./musics.json', 'utf-8');
var news = fs.readFileSync('./news.json', 'utf-8');
var events = [];
movies = JSON.parse(movies);
musics = JSON.parse(musics);
/* GET users listing. */
router.get('/', function (req, res, next) {
    var newMovie = req.query;
    if (!newMovie.title) {
        events = [];
        for (var i = 0; i < movies.length; i++) {
            events.push([movies[i].title, movies[i].src, movies[i].map]);
        }
        for (var i = 0; i < musics.length; i++) {
            events.push([musics[i].title, musics[i].src, musics[i].map]);
        }
        return res.send(events);
    }
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
