var EventEmitter = require('../lib/event-emitter');

class movieService extends EventEmitter {
    constructor(MapRepository) {
        super();
        window.ps = this;
        this.map = [];
        this.MapRepository = MapRepository;

    }
    getMap() {
        this.MapRepository.getMap().then(response => {
            this.map = response.data;
            this.trigger('new map');
        });
    }
}
angular.module('chat-app').service('mapService', mapService);

