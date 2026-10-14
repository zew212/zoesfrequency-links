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
        falsebackground.style.backgroundColor = "rgb(214, 204, 209)";
        poster.style.backgroundColor = "rgb(77, 39, 39)";
        posterbangs2.style.backgroundColor = "rgba(77, 39, 39, 0.81)";
        posterpupil1.style.backgroundColor = "rgb(77, 39, 39)";
        posterpupil2.style.backgroundColor = "rgb(77, 39, 39)";
        photobooth1.style.backgroundColor = "black";
        photobooth1.style.borderColor = "white";
        photobooth2.style.backgroundColor = "black";
        smallpicture.style.backgroundColor = "black";
        photobooth2.style.borderColor = "white";
        smallpicture.style.borderColor = "white";
        letter.style.backgroundColor = "rgb(245, 240, 237)";
        jewelryboxtop.style.backgroundColor = "black";
        jewelryboxfront.style.backgroundColor = "black";
        jewelryboxdrawer.style.backgroundColor = "black";
        jewelryboxdrawerhandle.style.backgroundColor = "rgb(235, 214, 97)";
        dresser.style.backgroundColor = "white";
        jewelryboxfront.style.borderColor = "gold";
        dresserfront.style.backgroundColor = "white";
        dresserfront.style.borderColor = "rgba(0, 0, 0, 0.623)";
        bowl.style.background = "linear-gradient(to bottom, #afb8ab, #44654e)";
        bowl.style.opacity = "1";
        bracelet1.style.opacity = "1";
        bracelet2.style.opacity = "1";
        lightswitch.style.color = "blue";
    }
     else {
        //lights off
        falsebackground.style.backgroundColor = "black";
        poster.style.backgroundColor = "white";
        posterbangs2.style.backgroundColor = "white";
        posterpupil1.style.backgroundColor = "red";
        posterpupil2.style.backgroundColor = "red";
        photobooth1.style.backgroundColor = "gray";
        photobooth1.style.borderColor = "gray";
        photobooth2.style.backgroundColor = "gray";
        smallpicture.style.backgroundColor = "gray";
        photobooth2.style.borderColor = "gray";
        smallpicture.style.borderColor = "gray";
        letter.style.backgroundColor = "gray";
        jewelryboxtop.style.backgroundColor = "gray";
        jewelryboxfront.style.backgroundColor = "gray";
        jewelryboxdrawer.style.backgroundColor = "gray";
        jewelryboxdrawerhandle.style.backgroundColor = "gray";
        dresser.style.backgroundColor = "gray";
        jewelryboxfront.style.borderColor = "gray";
        dresserfront.style.backgroundColor = "gray";
        dresserfront.style.borderColor = "gray";
        bowl.style.background = "rgba(177, 4, 4, 1)";
        bowl.style.opacity = "0.5";
        bracelet1.style.opacity = "0";
        bracelet2.style.opacity = "0";
        lightswitch.style.color = "rgba(186, 0, 0, 1)";
    }
});

//log new users as they come into the room
socket.on('response', (data) => {
    console.log(data);
    freqState.html(data + " joined the room");
});