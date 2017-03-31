var controller = require('./controller');

angular
    .module('chat-app')
    .component('eventsmap', {
        templateUrl: 'chat/content/eventsmap/template.html',
        controller
    });
