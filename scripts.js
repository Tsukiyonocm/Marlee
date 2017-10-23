//Variables 
var overlay = document.querySelector(".fa-bars");
var times = document.querySelector(".fa-times");
var menuSelect = document.querySelector("#hiddenNav")
var quoteFade = document.querySelector(".toggleOff")
var navScroll = document.querySelector("#navbar");


//Hamburger Menu Display Overlay
overlay.addEventListener("click", function(){
    if (times.classList.contains("closed")){
        //toggle Display property for hiddenNav
        menuSelect.classList.add("toggle");
        //FadeOut Hamburger
        overlay.classList.add("closed");
        //FadeIn X Menu
        times.classList.remove("closed");
    }
})


//Closes Out Overlay Display Menu
times.addEventListener("click", function(){
    if (overlay.classList.contains("closed")){
        //toggle Display Property for hiddenNav
        menuSelect.classList.remove("toggle");
        //FadeIn Hamburger
        overlay.classList.remove("closed");
        //FadOut X Menu
        times.classList.add("closed");
    }    
})

//Loads text after the page loads with transition
function onStart() {
    quoteFade.classList.add("toggleOn");
    quoteFade.classList.remove("toggleOff");
}

window.onload = onStart;


//Change Navbar Opacity on Scroll
window.onscroll = function (){
    if (document.body.scrollTop >= 100){
        navScroll.classList.add("colored");
        navScroll.classList.remove("transparent");
        alert("working");
    }
    else {
        navScroll.classList.add("transparent");
        navScroll.classList.remove("colored");
    }
};