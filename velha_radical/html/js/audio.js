var AUDIO = {
    playClick: function () {
        _capa.audio({
            id: 'audioPlayer',
            mp3: 'mp3/sound_click.mp3',
            autoplay: false
        });
    },

    playError: function () {
        _capa.audio({
            id: 'audioPlayer',
            mp3: 'mp3/sound_error.mp3',
            autoplay: false
        });
    },

    playRight: function () {
        _capa.audio({
            id: 'audioPlayer',
            mp3: 'mp3/sound_right.mp3',
            autoplay: false
        });
    },

    playWrong: function () {
        _capa.audio({
            id: 'audioPlayer',
            mp3: 'mp3/sound_wrong.mp3',
            autoplay: false
        });
    }
};
