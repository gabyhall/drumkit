let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

let bigDrumBoom = document.getElementById("bigDrumBoom");
let bigDrumKick = document.getElementById("bigDrumKick");
let leftDrum = document.getElementById("leftDrum");
let rightDrum = document.getElementById("rightDrum");
let leftCymbal = document.getElementById("leftCymbal");
let rightCymbalHi = document.getElementById("rightCymbalHi");
let rightCymbalOpen = document.getElementById("rightCymbalOpen");


window.addEventListener('keydown', event => {
    if (event.code == 'KeyA') {
        boom.play();
        document.images[2].style.height = "450px";
        setTimeout(()  => {
        document.images[2].style.height = "350px";}, 500)
    } else if (event.code == 'KeyS') {
        clap.play();
    } else if (event.code == 'KeyD') {
        hihat.play();
        document.images[5].style.height = "400px";
        setTimeout(()  => {
        document.images[5].style.height = "300px";}, 500)
    } else if (event.code == 'KeyF') {
        kick.play();  
    } else if (event.code == 'KeyG') {
        openhat.play();
    } else if (event.code == 'KeyH') {
        ride.play();
        document.images[0].style.height = "400px";
        setTimeout(()  => {
        document.images[0].style.height = "300px";}, 500)
    } else if (event.code == 'KeyJ') {
        snare.play();
        document.images[4].style.height = "400px";
        setTimeout(()  => {
        document.images[4].style.height = "300px";}, 500)
    } else if (event.code == 'KeyK') {
        tink.play();
    } else if (event.code == 'KeyL') {
        tom.play();
        document.images[1].style.height = "500px";
        setTimeout(()  => {
        document.images[1].style.height = "400px";}, 500)
    }
});
    

bigDrumBoom.addEventListener('click', () => {
    boom.play();
    document.images[2].style.height = "450px";
    setTimeout(()  => {
    document.images[2].style.height = "350px";}, 500)
});

bigDrumBoom.addEventListener('touchstart', () => {
    boom.play();
    document.images[2].style.height = "450px";
    setTimeout(()  => {
    document.images[2].style.height = "350px";}, 500)
});


bigDrumKick.addEventListener('click', () => {
    kick.play();
});

bigDrumKick.addEventListener('touchstart', () => {
    kick.play();
});


leftDrum.addEventListener('click', () => {
    tom.play();
    document.images[1].style.height = "500px";
    setTimeout(()  => {
    document.images[1].style.height = "400px";}, 500)
});

leftDrum.addEventListener('touchstart', () => {
    tom.play();
    document.images[1].style.height = "500px";
    setTimeout(()  => {
    document.images[1].style.height = "400px";}, 500)
});


rightDrum.addEventListener('click', () => {
    snare.play();
    document.images[4].style.height = "400px";
    setTimeout(()  => {
    document.images[4].style.height = "300px";}, 500)
});

rightDrum.addEventListener('touchstart', () => {
    snare.play();
    document.images[4].style.height = "400px";
    setTimeout(()  => {
    document.images[4].style.height = "300px";}, 500)
});


leftCymbal.addEventListener('click', () => {
    ride.play();
    document.images[0].style.height = "400px";
    setTimeout(()  => {
    document.images[0].style.height = "300px";}, 500)
});

leftCymbal.addEventListener('touchstart', () => {
    ride.play();
    document.images[0].style.height = "400px";
    setTimeout(()  => {
    document.images[0].style.height = "300px";}, 500)
});


rightCymbalHi.addEventListener('click', () => {
    hihat.play();
    document.images[5].style.height = "400px";
    setTimeout(()  => {
    document.images[5].style.height = "300px";}, 500)
});

rightCymbalHi.addEventListener('touchstart', () => {
    hihat.play();
    document.images[5].style.height = "400px";
    setTimeout(()  => {
    document.images[5].style.height = "300px";}, 500)
});


rightCymbalOpen.addEventListener('click', () => {
    openhat.play();
});

rightCymbalOpen.addEventListener('touchstart', () => {
    openhat.play();
});