let timers = document.querySelectorAll(".quiz .hquiz h2");


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

for(let i = 0; i < timers.length; i++)
{
    played(timers[i]);
}
