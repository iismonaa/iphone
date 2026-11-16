
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;
let autoPlay;

// DOTS YARATISH

slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        goToSlide(index);
        restartAutoPlay();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// SLIDE O'ZGARTIRISH

function goToSlide(index) {

    currentIndex = (index + slides.length) % slides.length;

    carousel.scrollTo({
        left: slides[currentIndex].offsetLeft -
              carousel.offsetLeft,
        behavior: "smooth"
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

// NEXT

next.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    restartAutoPlay();
});

// PREVIOUS

prev.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    restartAutoPlay();
});

// AUTO PLAY

function startAutoPlay() {

    autoPlay = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 4000);

}

function stopAutoPlay() {
    clearInterval(autoPlay);
}

function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

startAutoPlay();

// MOUSE HOVERDA TO'XTATISH

carousel.addEventListener("mouseenter", stopAutoPlay);
carousel.addEventListener("mouseleave", startAutoPlay);

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// MOBILDA LINK BOSILGANDA MENYUNI YOPISH

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
