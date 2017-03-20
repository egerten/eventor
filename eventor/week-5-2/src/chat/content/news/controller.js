module.exports = class newsController {
    constructor(newsService) {
        this.newsService = newsService;

        this.news = newsService.musics;

        this.newsService.getNews();

        this.newsService.bind('new news', () => {
            this.news = newsService.news;
        });
    }
}
