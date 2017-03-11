var controller = require('./controller');

angular
    .module('chat-app')
    .component('news', {
        templateUrl: 'chat/content/news/template.html',
        controller
    });
