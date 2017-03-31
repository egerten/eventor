var EventEmitter = require('../lib/event-emitter');

class movieService extends EventEmitter {
    constructor(MovieRepository) {
        super();
        window.ps = this;
        this.movies = [];
        this.MovieRepository = MovieRepository;

    }
    getMovies() {
        this.MovieRepository.getMovies().then(response => {
            this.movies = response.data;
            this.trigger('new movie');
    });
    }
}
angular.module('chat-app').service('movieService', movieService);

