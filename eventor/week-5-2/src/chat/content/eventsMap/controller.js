module.exports = class MovieController {
    constructor(movieService) {
        this.movies = movieService.movies;
    }
}
