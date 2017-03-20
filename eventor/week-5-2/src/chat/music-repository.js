class MusicRepository {
    constructor($http) {
        this.$http = $http;
    }
    getMusics() {
        return this.$http.get('http://localhost:3000/musics');
    }
}

angular.module('chat-app').service('MusicRepository', MusicRepository);