module.exports = class newsController {
    constructor(newsService) {
        this.news = newsService.news;
    }
}
