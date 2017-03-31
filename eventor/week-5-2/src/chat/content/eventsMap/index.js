var controller = require('./controller');

angular
    .module('chat-app')
    .component('map', {
        templateUrl: 'chat/content/map/template.html',
        controller
    });
