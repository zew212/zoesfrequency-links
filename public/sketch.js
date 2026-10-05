let socket = io();
let playing = false;

// target slider 
let slider = document.querySelector('#rotationSlider');
console.log(slider);

// listen for slider input and do something with the input
slider.addEventListener("input", function(e) {
    console.log(this.value);
    socket.emit("rotation", data);
});

rotationSlider = select('#rotationSlider');

function preload() {
    img = loadImage('holdinghands.png');
}

function sendFreq(){
    const data = [nameField.value(), freqInput.value()]
    socket.emit("frequency", data);
    console.log(data);
}

socket.on('freqResponse', (data) => {
    console.log(data);
    freqState.html(data[0] + " changed the frequency to " + data[1]);
    oscillator.freq(data[1], 0.250);
});

//log new users as they come into the room
socket.on('response', (data) => {
    console.log(data);
    freqState.html(data + " joined the room");
});

socket.on('trigger', (data) => {
    console.log(data[0]);
    console.log(data[1]); 
});

function submit() {
    socket.emit("name", nameField.value());
    freqState.html('idle...');
    oscillator.start();
    playing = true;
}

async function setup() {
    cnv = createCanvas(400, 400);
}

function play() {
    if (!playing) {
        oscillator.start();
        playing = true;
        buttonEl.html('stop');
    } else {
        oscillator.stop();
        playing = false;
        buttonEl.html('play');
    }
}
