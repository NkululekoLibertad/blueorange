var open = document.querySelector("#open-nav");
var nav = document.querySelector("#nav");

open.addEventListener("click", openTab);


function openTab(e) {



    if (nav.style.top === "-700px") {
        nav.style.top = "0";
        open.src = "../images/close.png";
    } else {
        nav.style.top = "-700px";
        open.src = "../images/open.png";
    }
}