let calc = document.querySelector("#calc");
let mainframe = document.querySelector("#mainframe");
let calcframe = document.querySelector("#calcframe");

let toggle = 0;
calc.onclick = function()
{
    if(toggle % 2 ==0){
    mainframe.style.width = "70%";
    calcframe.style.width = "30%";
    }

    else
    {
        mainframe.style.width = "100%";
        calcframe.style.width = "0%";
    }

    toggle += 1;
};
