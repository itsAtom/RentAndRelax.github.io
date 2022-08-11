//code for image-slider
let slideIndex = 1;
showSlides(slideIndex); //this used for display first image on page load

// this used for display next image..
function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

// this display slides with n index
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) 
        {slideIndex = 1}    

    if (n < 1) 
        {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
// this display areaimages on page load
var appimages = [
    { img: "../img/app1.jpg",imgname: "Down Town"},
    { img: "../img/app2.jpg",imgname: "North York"},
    { img: "../img/app3.jpg",imgname:"Etobicoke"}
];
function makeappImage()
{
    for(let i=0;i<images.length;i++)
    {
        var img = document.createElement('img')
        img.src = appimages[i].img;
        var papp = document.createElement('p');
        papp.textContent = appimages[i].imgname;
        document.getElementById('areacontents').appendChild(img);
        document.getElementById('areapcontent').appendChild(papp);
    }
}
var images = [
    { img: "../img/base1.jpg",imgname: "$1000 - 1 bedroom"},
    { img: "../img/base2.jpg",imgname: "$500 - 2 bedrrom"},
    { img: "../img/base3.jpg",imgname:"$1500 - condo"}
];
var index = 0;
function makeImage()
{
    for(let i=0;i<images.length;i++)
    {
        var img = document.createElement('img')
        img.src = images[i].img;
        var p = document.createElement('p')
        document.getElementById('content').appendChild(img);
        p.textContent = images[i].imgname;
        document.getElementById('pcontent').appendChild(p);
    }
}