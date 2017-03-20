class NewsRepository {
    constructor($http) {
        this.$http = $http;
    }
    getNews() {
        return this.$http.get('http://localhost:3000/news');
    }
}

angular.module('chat-app').service('NewsRepository', NewsRepository);