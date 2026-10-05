let socket = io();
let playing = false;
let lights = true;

function lightsToggle() {
    if (lights) {
        lights = false;
    } else {
        lights = true;
    }
    socket.emit('localLightVariable', lights);
}

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        poster.style.backgroundColor = "black";
    } else {
        //lights off
        poster.style.backgroundColor = "rgb(77, 39, 39)";
    }
});

//log new users as they come into the room
socket.on('response', (data) => {
    console.log(data);
    freqState.html(data + " joined the room");
});