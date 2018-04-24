let buttons = document.querySelectorAll(".secondback .mycontainer .row a");

let IT = document.querySelectorAll("#IT .col")
let elec = document.querySelectorAll("#elec .col")
let mech = document.querySelectorAll("#mech .col")
let mca = document.querySelectorAll("#mca .col")

let ITs = document.querySelector("#ITs")
let CSs = document.querySelector("#CSs")
let ECEs = document.querySelector("#ECEs")
let EEEs = document.querySelector("#EEEs")
let MECHs = document.querySelector("#MECHs")
let CIVILs = document.querySelector("#CIVILs")
let MCAs = document.querySelector("#MCAs")
let MBAs = document.querySelector("#MBAs")

function expanddrawer1()
{
    IT[0].style.width = 350 + "px";
 //   IT[0].style.paddingRight = 150 + "px";
//    IT[1].style.paddingLeft = 150 + "px";
    IT[1].style.width = 350 + "px";
    elec[0].style.width = 150 + "px";
    elec[1].style.width = 150 + "px";
}

function expanddrawer2()
{
    elec[0].style.paddingLeft = 150 + "px";
    elec[0].style.paddingRight = 150 + "px";
    elec[1].style.paddingLeft = 150 + "px";
    elec[1].style.paddingRight = 150 + "px";

}

function expanddrawer3()
{
    mech[0].style.paddingLeft = 150 + "px";
    mech[0].style.paddingRight = 150 + "px";
    mech[1].style.paddingLeft = 150 + "px";
    mech[1].style.paddingRight = 150 + "px";

}

function expanddrawer4()
{
    mca[0].style.paddingLeft = 150 + "px";
    mca[0].style.paddingRight = 150 + "px";
    mca[1].style.paddingLeft = 150 + "px";
    mca[1].style.paddingRight = 150 + "px";

}


for(var i = 0; i < IT.length; i++)
{
    IT[i].addEventListener('mouseover', expanddrawer1);
}

for(var i = 0; i < elec.length; i++)
{
    elec[i].addEventListener('mouseover', expanddrawer1);
}

for(var i = 0; i < mech.length; i++)
{
    mech[i].addEventListener('mouseover', expanddrawer1);
}

for(var i = 0; i < mca.length; i++)
{
    mca[i].addEventListener('mouseover', expanddrawer1);
}
