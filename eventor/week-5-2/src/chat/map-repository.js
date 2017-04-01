class MapRepository {
    constructor($http) {
        this.$http = $http;
    }
    getMaps() {
        return this.$http.get('http://localhost:3000/maps');
    }
}

angular.module('chat-app').service('MapRepository', MapRepository);