

var menuOpen = document.getElementById("open");
var menuClose = document.getElementById("close");
var goBack = document.getElementById("back");
var navBar = document.getElementById("nav-menu");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var content = document.getElementById("content");
var content2 = document.getElementById("content2");
var returnText = document.getElementById("content_text");
var returnImg = document.getElementById("content_img");
var darkMode = document.getElementById("moon");
var lightMode = document.getElementById("sun");


function showMenu(){
    navBar.style.right = 0;
    menuOpen.style.display = "none";
}
function hideMenu(){
    navBar.style.right = "";
    menuOpen.style.display = "";
}
content2.style.display="none"
function changeSlide(){
    content.style.display="none";
    content2.style.display="flex";
    button2.style.display="block";
    button.style.display="none";
}
function changeSlide2(){
    content2.style.display="none"
    content.style.display="flex";
    returnText.style.animationDelay = ".15s";
    returnImg.style.animationDelay= ".03s";
    button.style.display="block";
    button2.style.display="none";

}

//CHANGE MODE
var overlay = document.getElementById("overlay");
darkMode.style.display = "none";

 function light(){
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    document.body.style.transition = "all 1s ease-in-out";
    lightMode.style.display = "none";
    darkMode.style.display = "block";
 }
 function dark(){
    document.body.style.background = "#060c14";
    document.body.style.color = "#fff";
    document.body.style.transition = "all 1s ease-in-out";
    navBar.style.color = "";
    overlay.style.background = "";
    lightMode.style.display = "block";
    darkMode.style.display = "none";
 }


firstSlide = document.getElementsByClassName("image");
console.log(firstSlide.length);

function next(){
    firstSlide.style.transition = "margin .6s ease-in-out";
    firstSlide.style.marginLeft = "-30vw";
}
function prev(){
    firstSlide.style.transition = "margin .6s ease-in-out";
    firstSlide.style.marginLeft = "0";
}

function next(direction){
    let slide = document.getElementById("container");
    scrollComplete = 0;
    let slideBar = setInterval(function(){
        if (direction == "left"){
            slide.scrollLeft -= 300;
        } else{
            slide.scrollLeft += 300;
        }
        scrollComplete += 100;
        if(scrollComplete >= 100){
            window.clearInterval(slideBar);
        }
    }, 100);
}

function prev(direction){
    let slide = document.getElementById("container");
    scrollComplete = 0;
    let slideBar = setInterval(function(){
        if (direction == "left"){
            slide.scrollLeft += 300;
        } else{
            slide.scrollLeft -= 300;
        }
        scrollComplete -= 100;
        if(scrollComplete <= 100){
            window.clearInterval(slideBar);
        }
    }, 100);
}
