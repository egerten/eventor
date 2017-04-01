module.exports = class EventsMapController {
    constructor(MapService) {
        this.map = { center: { latitude: 40.892526, longitude: 29.374910 }, zoom: 8 };
        this.mapService = MapService;
        this.maps = MapService.maps;
        this.mapService.getMaps();
        this.mapService.bind('new maps', () => {
            this.maps = MapService.maps;
            console.log(this.maps);
            console.log(this.maps[1][2].center.latitude);
        });

    }
    showWindow() {
        this.windowOpt.show = true;
    }
    closeWindow() {
        this.windowOpt.show = false;
    }


}