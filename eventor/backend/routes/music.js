
var fs = require('fs');
var express = require('express');
var router = express.Router();
var musics = fs.readFileSync('./musics.json', 'utf-8');
musics = JSON.parse(musics);
/* GET users listing. */
router.get('/', function (req, res, next) {
    var newMusic = req.query;
    if (!newMusic.title) return res.send(musics);
    newMusic.id = musics.length + 1;
    musics.push(newMusic);

    fs.writeFileSync('./musics.json', JSON.stringify(musics));

    res.send(musics);
});
router.get('/:id', (req, res) => {
    var music = musics.find(p => p.id = req.params.id);
    if (music) res.send(music);
    else res.sendStatus(404);
});
router.post('/', function (req, res, next) {
    var newMusic = req.body;
    if (!newMusic.title) return res.send(400, 'Invalid');
    newMusic.id = musics.length + 1;
    musics.push(newMusic);

    fs.writeFileSync('./musics.json', JSON.stringify(musics));
    res.end();
});
module.exports = router;
