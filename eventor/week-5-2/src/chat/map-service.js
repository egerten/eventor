var EventEmitter = require('../lib/event-emitter');
var Thread = require('./thread/thread');

class MapService extends EventEmitter {
    constructor(movieService) {
        super();
    };
}
angular.module('chat-app').service('MapService', MapService);
