module.exports = class EventsMapController {
    constructor(movieService) {
        this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        this.marker = [
            {
                id: 583187,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                latitude: 45,
                longitude: -73,
                title: "title"
            }
        ];
        this.movies = movieService.movies;
        movieService.getMovies();

        movieService.bind('new movie', () => {
            this.movies = movieService.movies;
            console.log(this.movies);
        });
    }
}