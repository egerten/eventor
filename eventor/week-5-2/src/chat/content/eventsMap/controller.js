module.exports = class mapController {
    constructor(mapService) {
        this.mapService = mapService;

        this.map = mapService.musics;

        this.mapService.getmap();

        this.mapService.bind('new map', () => {
            this.map = mapService.map;
        });
    }
}