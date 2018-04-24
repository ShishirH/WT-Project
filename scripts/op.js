let numbers = [];
let numindex = 0;
let operations = [];
let opindex = 0;
let dec = 0; // no decimal
let bars = document.querySelector("#result");
let res = bars.textContent;
let last = bars.textContent[bars.textContent.length - 1];

// let nums = document.querySelectorAll(".numbers li button");
// for(let but in nums)
// {
//     if(nums[but].textContent != undefined){
//     //alert(nums[but].textContent);
//     nums[but].addEventListener('click', addNum(nums[but].textContent));
//     }
// }
let but;
for(let i = 0; i <= 9; i++)
{
    but = document.getElementById(i.toString(10));
    but.onclick = addNum(but.textContent);
}
bars.textContent = "";

window.onkeydown = function (e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code >= 96 && code <= 105) {
        bars.innerHTML = bars.innerHTML + String.fromCharCode(code-48);
    }
    else if (code === 107 || code === 106 
                || code === 109 || code === 111) { 
        dec = 0;
        bars.textContent = bars.textContent + String.fromCharCode(code-64);
    }

    else if (code == 110){
        if(dec == 0){
            bars.textContent += ".";
            dec = 1;
        }
    }
    else if(code === 8)
    {
        if(bars.textContent.slice(bars.textContent.length -1) == ".")
            dec = 0;
        bars.textContent = bars.textContent.slice(0,-1);
    }

    else if (code == 13)
        calc();
    
    else if (code == 27){
        dec = 0;
        bars.textContent = "";
    }
};

//Adding equals functionality

let equals = document.querySelector("#equals");
equals.addEventListener('click', calc());

function calc()
{
    let separators = ['\\\+', '-', '\\*', '/'];
    let nums = bars.textContent.split(new RegExp(separators.join('|'), 'g'));
    let ops = [];
    let bar = bars.textContent.split('');
    for(let op in bar)
    {
        if(bar[op] == "+" || bar[op] == "-" || 
        bar[op] == "*" || bar[op] == "/")
        {
            ops.push(bar[op]);
        }
    }

    let solution;
    if(ops[0] === "+" || ops[0] === "-")
    {
        solution = 0;
    }

    else
    {
        solution = 1;
    }
    let opindex = 0;
    solution = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        let func;
        if(dec == 0)
            func = parseInt;
        else
            func = parseFloat;
        if(ops[opindex] == "+")
        {
            solution = func(solution) + func(nums[i]);
        }

        if(ops[opindex] == "-")
        {
            solution = func(solution) - func(nums[i]);
        }
        
        if(ops[opindex] == "*")
        {
            solution = func(solution) * func(nums[i]);
        }
        
        if(ops[opindex] == "/")
        {
            if(parseInt(nums[i]) == "0")
            {
                solution = "Cannot divide by zero"
                break;
            }
        }

        opindex++;

    }

    bars.textContent = solution;
}

function addNum(str)
{
    bars.textContent += str;
}