var controller = require('./controller');

angular
    .module('chat-app')
    .component('movie', {
        templateUrl: 'chat/content/movie/template.html',
        controller
    });
