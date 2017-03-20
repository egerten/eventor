module.exports = class MusicController {
    constructor(musicService) {
        this.musicService = musicService;

        this.musics = musicService.musics;

        this.musicService.getMusics();

        this.musicService.bind('new music', () => {
            this.musics = musicService.musics;
        });
    }
}
