
//Create dynamic clock on my page:
function showTime() {
    let clock = document.querySelector(".clock span");
    let now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    if (hours < 10) {hours = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    clock.textContent = hours + ":" + minutes + ":" + seconds;
}

window.onload = function () {
    setInterval(showTime, 500);
}

//*****************************************************//


//Style The Width Of Progress Of Spans:
//Scroll To Top When Click On UP Key: 
let spans = document.querySelectorAll(".skills .progress span");
let skillSection = document.querySelector(".resume .skills");
let key = document.querySelector(".resume .up");

window.onscroll = function () {
    if (window.scrollY >= skillSection.offsetTop - 500) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    };

    this.scrollY >= 1000 ? key.classList.add("show") : key.classList.remove("show");
};

function clickOnUp() {
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
};
key.addEventListener("click", clickOnUp);

//*****************************************************//

//Disable Right Click On page: 

// document.addEventListener ('contextmenu', function (event) {
//     event.preventDefault();
// });