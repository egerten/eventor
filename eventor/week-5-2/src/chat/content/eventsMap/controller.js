module.exports = class EventsMapController {
    constructor(MapService) {
        this.map = { center: { latitude: 40.892526, longitude: 29.374910 }, zoom: 8 };
        /*this.marker = [
            {
                id: 583187,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                latitude: 45,
                longitude: -73,
                title: "title"
            }
        ];*/
        this.mapService=MapService;
        this.maps = MapService.maps;
        this.mapService.getMaps();
        this.mapService.bind('new maps', () => {
            this.maps = MapService.maps;
            console.log(this.maps);
            console.log(this.maps[1][2].center.latitude);
        });
      /* this.windowOpt = {
            position: {
                lat: 45.05,
                lng: -73.05
            },
            show: true
        };*/

    }
    showWindow() {
        this.windowOpt.show = true;
    }
    closeWindow() {
        this.windowOpt.show = false;
    }


}