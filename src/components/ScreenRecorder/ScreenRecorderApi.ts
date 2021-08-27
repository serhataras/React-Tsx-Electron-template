import socketClient from 'socket.io-client';


export const SERVER = 'http://127.0.0.1:3033';
export const socket = socketClient(SERVER);
// @ts-ignore
export function sendVideoViaSocketIO(videoBlob, fileName, videoStartingDate, videoDuration, orderInBatch) {
    if (socket) {
        const data: string = JSON.stringify({
            fileName,
            orderInBatch,
            videoDuration,
            videoStartingDate
        });
        socket.emit('uploadFile', videoBlob, data);
    }
}

export function getVideo(id: string) {
    if (id) {
        if (socket) {
            console.log('getVideoSent: ' + id);
            socket.emit('getVideo', id);
        }
    }
}

export function getAllVideoMetaData() {
    if (socket) {
        console.log('getAllVideoMetaData: ');
        socket.emit('getAllVideoMetaData', 'GETALL');
    }
}
// @ts-ignore
export function stopVideo(videoBlob: Blob, fileName, videoStartingDate, videoDuration, orderInBatch) {
    if (socket) {
        const data: string = JSON.stringify({
            fileName,
            orderInBatch,
            videoDuration,
            videoStartingDate
        });
        console.log('uploadFileStopped: ' + data);
        socket.emit('uploadFileStopped', videoBlob, data);
    }
}

