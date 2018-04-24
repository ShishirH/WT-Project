let count = 0;
let timer = document.querySelector("#timer");
var isFullScreen = document.fullScreen || 
    document.mozFullScreen || 
    document.webkitIsFullScreen;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function played (time){
    let min = time.textContent.split(":")[0];
    let seconds = time.textContent.split(":")[1];
    min = parseInt(min);
    seconds = parseInt(seconds);
    while (min != 0){
        if(seconds == 0)
        {
            min = min - 1;
            seconds = 59;
            time.textContent = min + ":" + seconds;
            await sleep(1000);
        }

        else
        {
            seconds = seconds - 1;
            if(seconds < 10)
                time.textContent = min + ":0" + seconds;
            else
                time.textContent = min + ":" + seconds;
            await sleep(1000);

        }

    }
}
let start = document.querySelector("#start");

let mycalc = document.querySelector("#calc");

function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
        mycalc.style.display = "inline";
        timer.textContent = "05:00";
        start.textContent = "Submit";
        timer.style.fontSize = "4rem";
        played(timer);
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function getexitfullscreen(){
    return document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitExitFullscreen;
}
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

async function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        ///fire your event
        start.textContent = "Submitting!";
        mycalc.style.display = "none";
        let myframe = document.querySelector("#mainframe");
        calcframe.style.width = "0%";
        mainframe.style.width = "100%";
        myframe.src = "/loading";
        await sleep(3000);
        document.location.href = "/newIT";
    }
}


