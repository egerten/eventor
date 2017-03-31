var controller = require('./controller');

angular
    .module('chat-app', ['uiGmapgoogle-maps'])
    .component('eventsmap', {
        templateUrl: 'chat/content/eventsmap/template.html',
        controller
    });
