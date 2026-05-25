// TYPING EFFECT

const text = "Web Developer | CSE Student | Frontend Learner";

let index = 0;

function typeEffect() {

    document.getElementById("typing-text").innerHTML =
        text.slice(0, index);

    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

typeEffect();


// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
};


// SCROLL TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    }

    else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// CONTACT FORM MESSAGE

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();
});