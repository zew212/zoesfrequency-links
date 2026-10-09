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
        background = "rgb(214, 204, 209)";
    } else {
        //lights off
        background = "black";
    }
});


socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        poster.style.backgroundColor = "rgb(77, 39, 39)";
    } else {
        //lights off
        poster.style.backgroundColor = "white";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        posterbangs1.style.backgroundColor = "rgba(77, 39, 39, 0.81)";
    } else {
        //lights off
        posterbangs1.style.backgroundColor = "white";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        posterbangs2.style.backgroundColor = "rgba(77, 39, 39, 0.81)";
    } else {
        //lights off
        posterbangs2.style.backgroundColor = "white";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        posterpupil1.style.backgroundColor = "rgb(77, 39, 39)";
    } else {
        //lights off
        posterpupil1.style.backgroundColor = "red";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        posterpupil2.style.backgroundColor = "rgb(77, 39, 39)";
    } else {
        //lights off
        posterpupil2.style.backgroundColor = "red";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        photobooth1.style.backgroundColor = "black";
    } else {
        //lights off
        photobooth1.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        photobooth1.style.borderColor = "black";
    } else {
        //lights off
        photobooth1.style.borderColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        photobooth2.style.backgroundColor = "black";
    } else {
        //lights off
        photobooth2.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        smallpicture.style.backgroundColor = "black";
    } else {
        //lights off
        smallpicture.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        photobooth2.style.borderColor = "black";
    } else {
        //lights off
        photobooth2.style.borderColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        smallpicture.style.borderColor = "black";
    } else {
        //lights off
        smallpicture.style.borderColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        letter.style.backgroundColor = "rgb(245, 240, 237)";
    } else {
        //lights off
        letter.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        //document.body.style.backgroundColor = "white";
        jewelryboxtop.style.backgroundColor = "black";
    } else {
        //lights off
        jewelryboxtop.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        jewelryboxfront.style.backgroundColor = "black";
    } else {
        //lights off
        jewelryboxfront.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        jewelryboxdrawer.style.backgroundColor = "black";
    } else {
        //lights off
        jewelryboxdrawer.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        jewelryboxdrawerhandle.style.backgroundColor = "rgb(235, 214, 97)";
    } else {
        //lights off
        jewelryboxdrawerhandle.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        dresser.style.backgroundColor = "white";
    } else {
        //lights off
        dresser.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        jewelryboxfront.style.borderColor = "gold";
    } else {
        //lights off
        jewelryboxfront.style.borderColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        jewelryboxdrawer.style.borderColor = "gold";
    } else {
        //lights off
        jewelryboxdrawer.style.borderColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        dresserfront.style.backgroundColor = "white";
    } else {
        //lights off
        dresserfront.style.backgroundColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        dresserfront.style.borderColor = "rgba(0, 0, 0, 0.623)";
    } else {
        //lights off
        dresserfront.style.borderColor = "gray";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        bowl.style.background = "linear-gradient(to bottom, #afb8ab, #44654e)";
    } else {
        //lights off
        bowl.style.background = "rgba(177, 4, 4, 1)";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        bowl.style.opacity = "1";
    } else {
        //lights off
        bowl.style.opacity = "0.5";
    }
});

//log new users as they come into the room
socket.on('response', (data) => {
    console.log(data);
    freqState.html(data + " joined the room");
});