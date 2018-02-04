
function quiz()
{
	var qz = document.querySelector(".quiz");
	var ass = document.querySelector(".assignment");
	var notes = document.querySelector(".notes");	
	var divs = document.querySelector(".fixheight");
	var slides = document.querySelector("#slideshows");

	ass.style.display = "none";
	qz.style.display = "block";
	divs.style.display = "block";
	notes.style.display = 'none';
	slides.style.display = 'none';
}

function assignment()
{
	var qz = document.querySelector(".quiz");
	var ass = document.querySelector(".assignment");
	var notes = document.querySelector(".notes");	
	var divs = document.querySelector(".fixheight");

	ass.style.display = "block";
	qz.style.display = "none";
	divs.style.display = 'block';
	notes.style.display = 'none';

}

function note()
{
	var qz = document.querySelector(".quiz");
	var ass = document.querySelector(".assignment");
	var notes = document.querySelector(".notes");	
	var divs = document.querySelector(".fixheight");

	divs.style.display = 'none';
	ass.style.display = "none";
	qz.style.display = "none";

	var notes = document.querySelector(".notes");
	notes.style.display = 'inline';	
	notes.style.verticalAlign = 'top';
}