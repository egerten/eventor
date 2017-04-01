var EventEmitter = require('../lib/event-emitter');
var Thread = require('./thread/thread');

class MapService extends EventEmitter {
    constructor(MapRepository) {
        super();
        this.maps = [];
        this.mapRepository = MapRepository;
    };
        getMaps() {
        this.mapRepository.getMaps().then(response => {
            this.maps = response.data;
            this.trigger('new maps');
    });
    }
}
angular.module('chat-app').service('MapService', MapService);