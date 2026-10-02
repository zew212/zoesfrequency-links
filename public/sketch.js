let socket = io();
let playing = false;
let lights = true;

function lightsToggle() {
    if (lights) {
        lights = false;
    } else {
        lights = true;
    }
    socket.emit('lights', lights);
}

socket.on('lightState', (data) => {
    if (data) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
});


//log new users as they come into the room
socket.on('response', (data) => {
    console.log(data);
    freqState.html(data + " joined the room");
});

