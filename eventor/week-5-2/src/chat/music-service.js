var EventEmitter = require('../lib/event-emitter');

class musicService extends EventEmitter {
    constructor(MusicRepository) {
        super();
        window.ps = this;
        this.MusicRepository = MusicRepository;


    }
    getMusics() {
        this.MusicRepository.getMusics().then(response => {
            this.musics = response.data;
            this.trigger('new music');
        });
    }
}
angular.module('chat-app').service('musicService', musicService);

