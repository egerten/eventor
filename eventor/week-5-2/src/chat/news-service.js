var EventEmitter = require('../lib/event-emitter');

class newsService extends EventEmitter {
    constructor(NewsRepository) {
        super();
        window.ps = this;
        this.NewsRepository = NewsRepository;
    }
    getNews() {
        this.NewsRepository.getNews().then(response => {
            this.news = response.data;
            this.trigger('new news');
        });
    }
}
angular.module('chat-app').service('newsService', newsService);

