let question = 0;

let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");

let text = document.querySelector(".text");
let options = document.querySelector(".options");
let questions = document.querySelector(".questions");

function resetColors()
{
    A.style.backgroundColor = "white";
    B.style.backgroundColor = "white";
    C.style.backgroundColor = "white";
    D.style.backgroundColor = "white";
}

function selectOptionA()
{
    resetColors();
    A.style.backgroundColor = "lightgreen";
}

function selectOptionB()
{
    resetColors();
    B.style.backgroundColor = "lightgreen";
}

function selectOptionC()
{
    resetColors();
    C.style.backgroundColor = "lightgreen";
}

function selectOptionD()
{
    resetColors();
    D.style.backgroundColor = "lightgreen";
}


let quesArray = ["What is the full form of JSP?", "What is the full form of PHP?", "What is CSS used for?"];
let AArray = ["Java Server Pages", "Personal Homely Paging", "Structure"];
let BArray = ["Java Servlet Pager", "Personal Home Page", "Scripting"];
let CArray = ["Java Servlet PHP", "Personal HTML", "Styling"];
let DArray = ["Java Server PHP", "Personalilty Development", "Backend"];

let forward = document.querySelector("#forward");
let backward = document.querySelector("#back");

A.addEventListener('click', selectOptionA);
B.addEventListener('click', selectOptionB);
C.addEventListener('click', selectOptionC);
D.addEventListener('click', selectOptionD);

forward.addEventListener('click', () => {
    resetColors();
    backward.disabled = false;
    questions.textContent = quesArray[++question];
    A.textContent = AArray[question];
    B.textContent = BArray[question];
    C.textContent = CArray[question];
    D.textContent = DArray[question];
    if(question == 2)
    {
        forward.disabled = true;
    }
});

if(question == 0)
{
    backward.disabled = true;
}

backward.addEventListener('click', () => {
    resetColors();
    forward.disabled = false;
    questions.textContent = quesArray[--question];
    A.textContent = AArray[question];
    B.textContent = BArray[question];
    C.textContent = CArray[question];
    D.textContent = DArray[question];
    if(question == 0)
    {
        backward.disabled = true;
    }

})
