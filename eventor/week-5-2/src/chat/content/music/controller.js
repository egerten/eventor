module.exports = class MusicController {
    constructor(musicService) {
        this.musics = musicService.musics;
    }
}
