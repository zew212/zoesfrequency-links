let socket = io();
let playing = false;
let lights = true;

function lightsOff() {
    lights = false;
    socket.emit('localLightVariable', false);
}

function lightsOn() {
    lights = true;
    socket.emit('localLightVariable', true);
}

// ask the server to open/close the box for everyone
function toggleBox() {
    const open = !document.body.classList.contains('boxopen');
    socket.emit('localBoxVariable', open);
}

// the server tells everyone whether the box is open
socket.on('boxState', (open) => {
    document.body.classList.toggle('boxopen', open);
    if (!open) {
        ghost.style.left = "";
        ghost.style.top = "";
    }
});

// send your cursor position to the server while the box is open
document.addEventListener('mousemove', (e) => {
    if (document.body.classList.contains('boxopen')) {
        socket.emit('localGhostPosition', { x: e.pageX, y: e.pageY });
    }
});

// the server tells everyone where the ghost should go
socket.on('ghostPosition', (pos) => {
    if (document.body.classList.contains('boxopen')) {
        ghost.style.left = (pos.x - 25) + "px";
        ghost.style.top = (pos.y - 30 + 110) + "px";
    }
});

socket.on('lightState', (data) => {
    //lights on
    if (data === true) {
        document.documentElement.style.backgroundColor = "rgb(214, 204, 209)";
        document.body.style.backgroundColor = "rgb(214, 204, 209)";
        poster.style.backgroundColor = "rgb(77, 39, 39)";
        posterbangs2.style.backgroundColor = "rgb(77, 39, 39)";
        posterbangs1.style.backgroundColor = "rgb(77, 39, 39)";
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
        jewelryboxdrawer.style.borderColor = "rgb(235, 214, 97)";
        jewelryboxdrawerhandle.style.backgroundColor = "rgb(235, 214, 97)";
        dresser.style.backgroundColor = "white";
        jewelryboxfront.style.borderColor = "gold";
        dresserfront.style.backgroundColor = "white";
        dresserfront.style.borderColor = "rgba(0, 0, 0, 0.623)";
        bowl.style.background = "linear-gradient(to bottom, #afb8ab, #44654e)";
        bowl.style.opacity = "1";
        bracelet1.style.opacity = "1";
        bracelet2.style.opacity = "1";
    }
     else {
        //lights off
        document.documentElement.style.backgroundColor = "black";
        document.body.style.backgroundColor = "black";
        poster.style.backgroundColor = "white";
        posterbangs2.style.backgroundColor = "white";
        posterbangs1.style.backgroundColor = "white";
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
        jewelryboxdrawer.style.borderColor = "black";
        jewelryboxdrawerhandle.style.backgroundColor = "black";
        dresser.style.backgroundColor = "gray";
        jewelryboxfront.style.borderColor = "black";
        dresserfront.style.backgroundColor = "gray";
        dresserfront.style.borderColor = "gray";
        bowl.style.background = "rgba(177, 4, 4, 1)";
        bowl.style.opacity = "0.5";
        bracelet1.style.opacity = "0";
        bracelet2.style.opacity = "0";    }
});

//log new users as they come into the room
socket.on('response', (data) => {
    console.log(data);
    freqState.html(data + " joined the room");
});