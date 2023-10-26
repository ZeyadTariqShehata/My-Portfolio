// =======================================================================

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

key.onclick = function () {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
};

// =========Disable Right Click On page===============

// document.addEventListener ('contextmenu', function (event) {
//     event.preventDefault();
// });