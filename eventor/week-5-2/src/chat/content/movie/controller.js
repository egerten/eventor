module.exports = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;

        this.movies = movieService.movies;

        this.movieService.getMovies();

        this.movieService.bind('new movie', () => {
            this.movies = movieService.movies;
        });
    }
}

