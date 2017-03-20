
var fs = require('fs');
var express = require('express');
var router = express.Router();
var news = fs.readFileSync('./news.json', 'utf-8');
news = JSON.parse(news);
/* GET users listing. */
router.get('/', function (req, res, next) {
    var newNews = req.query;
    if (!newNews.title) return res.send(news);
    newNews.id = news.length + 1;
    news.push(newNews);

    fs.writeFileSync('./news.json', JSON.stringify(news));

    res.send(news);
});
router.get('/:id', (req, res) => {
    var anew = news.find(p => p.id = req.params.id);
    if (anew) res.send(anew);
    else res.sendStatus(404);
});
router.post('/', function (req, res, next) {
    var newNews = req.body;
    if (!newNews.title) return res.send(400, 'Invalid');
    newNews.id = news.length + 1;
    news.push(newNews);

    fs.writeFileSync('./news.json', JSON.stringify(news));
    res.end();
});
module.exports = router;
