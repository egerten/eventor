class MovieRepository {
    constructor($http) {
        this.$http = $http;
    }
    getMovies() {
        return this.$http.get('http://localhost:3000/movies');
    }
}

angular.module('chat-app').service('MovieRepository', MovieRepository);