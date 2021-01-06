import { pushInDataLayer } from '../src/modules/pushInDataLayer';

let withLoveTracking = () => {

    const divisor = 10;

    const audios_status = {};

    const event_handler = (e) => {

        let data = {};

        switch (e.type) {

        case 'timeupdate':

            audios_status[e.target.id].current = Math.round(e.target.currentTime);

            const percent = Math.floor(100 * audios_status[e.target.id].current / e.target.duration);

            for (let j in audios_status[e.target.id]._progress_markers) {
                if (percent >= j && j > audios_status[e.target.id].greatest_marker) {
                    audios_status[e.target.id].greatest_marker = j;
                }
            }

            if (audios_status[e.target.id].greatest_marker && !audios_status[e.target.id]._progress_markers[audios_status[e.target.id].greatest_marker]) {
                audios_status[e.target.id]._progress_markers[audios_status[e.target.id].greatest_marker] = true;

                data = {
                    'event': 'audio',
                    'audioPlayerAction': `Progress ${audios_status[e.target.id].greatest_marker}%`,
                    'audioTitle': decodeURIComponent(e.target.currentSrc.split('/')[e.target.currentSrc.split('/').length - 1])
                };

                pushInDataLayer(data);
            }
            break;

        case 'play':

            data = {
                'event': 'audio',
                'audioPlayerAction': 'play',
                'audioTitle': decodeURIComponent(e.target.currentSrc.split('/')[e.target.currentSrc.split('/').length - 1])
            };
            pushInDataLayer(data);

            break;

        case 'pause':

            data = {
                'event': 'audio',
                'audioPlayerAction': 'pause',
                'audioTitle': decodeURIComponent(e.target.currentSrc.split('/')[e.target.currentSrc.split('/').length - 1]),
                'audioValue': audios_status[e.target.id].current
            };

            pushInDataLayer(data);

            break;

        case 'ended':

            data = {
                'event': 'audio',
                'audioPlayerAction': 'finished',
                'audioTitle': decodeURIComponent(e.target.currentSrc.split('/')[e.target.currentSrc.split('/').length - 1])
            };

            pushInDataLayer(data);

            break;

        default:
            break;
        }
    };

    const audios = document.querySelectorAll('audio[controls]');

    for (let i = 0; i < audios.length; i++) {

        let audioTagId;

        if (!audios[i].getAttribute('id')) {
            audioTagId = 'html5_audio_' + Math.random().toString(36).slice(2);
            audios[i].setAttribute('id', audioTagId);
        } else {
            audioTagId = audios[i].getAttribute('id');
        }

        audios_status[audioTagId] = {};
        audios_status[audioTagId].greatest_marker = 0;
        audios_status[audioTagId]._progress_markers = {};

        for (let j = 0; j < 100; j++) {
            audios_status[audioTagId].progress_point = divisor * Math.floor(j / divisor);
            audios_status[audioTagId]._progress_markers[audios_status[audioTagId].progress_point] = false;
        }

        audios_status[audioTagId].current = 0;

        audios[i].addEventListener('play', event_handler, false);
        audios[i].addEventListener('pause', event_handler, false);
        audios[i].addEventListener('ended', event_handler, false);
        audios[i].addEventListener('timeupdate', event_handler, false);
    }
};

withLoveTracking();
