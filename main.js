"use strict";
//main-navbar logic here
const mainNavbar = document.querySelector("#main-navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        mainNavbar === null || mainNavbar === void 0 ? void 0 : mainNavbar.classList.add("bg-white");
    }
    else {
        mainNavbar === null || mainNavbar === void 0 ? void 0 : mainNavbar.classList.remove("bg-white");
    }
});
// SideNavbar  logic here
const burgermenu = document.querySelector("#burger-menu");
const sideNavbarContent = document.querySelector("#side-navbar-content");
const closeBtn = document.querySelectorAll(".close-btn-togel");
const sideNavbarBackdrop = document.querySelector("#side-navbar-backdrop");
sideNavbarContent === null || sideNavbarContent === void 0 ? void 0 : sideNavbarContent.addEventListener("click", (e) => {
    e.stopPropagation();
});
burgermenu === null || burgermenu === void 0 ? void 0 : burgermenu.addEventListener("click", () => {
    if (!(sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.contains("collapse"))) {
        sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.add("collapse");
    }
    else {
        sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.remove("collapse");
    }
});
closeBtn.forEach((btn) => {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
        if (!(sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.contains("collapse"))) {
            sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.add("collapse");
        }
        else {
            sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.remove("collapse");
        }
    });
});
sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.addEventListener("click", () => {
    if (!(sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.contains("collapse"))) {
        sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.add("collapse");
    }
    else {
        sideNavbarBackdrop === null || sideNavbarBackdrop === void 0 ? void 0 : sideNavbarBackdrop.classList.remove("collapse");
    }
});
//homepage section-3 crousel logic here
const crousel1ImgOne = document.querySelector("#crousel-1-img-1");
const crousel1ImgTwo = document.querySelector("#crousel-1-img-2");
const crousel1ImgThree = document.querySelector("#crousel-1-img-3");
const crousel1Btn = document.querySelector("#crousel-1-btn");
const crousel1DotOne = document.querySelector("#crousel-1-dot-1");
const crousel1DotTwo = document.querySelector("#crousel-1-dot-2");
const crousel1DotThree = document.querySelector("#crousel-1-dot-3");
crousel1Btn === null || crousel1Btn === void 0 ? void 0 : crousel1Btn.addEventListener("click", () => {
    if ((crousel1ImgOne === null || crousel1ImgOne === void 0 ? void 0 : crousel1ImgOne.classList.contains("left")) &&
        (crousel1ImgTwo === null || crousel1ImgTwo === void 0 ? void 0 : crousel1ImgTwo.classList.contains("mid")) &&
        (crousel1ImgThree === null || crousel1ImgThree === void 0 ? void 0 : crousel1ImgThree.classList.contains("rightc"))) {
        crousel1ImgOne.classList.remove("left");
        crousel1ImgOne.classList.add("left-mid");
        crousel1ImgTwo.classList.remove("mid");
        crousel1ImgTwo.classList.add("mid-right");
        crousel1ImgThree.classList.remove("rightc");
        crousel1ImgThree.classList.add("right-left");
        crousel1DotOne === null || crousel1DotOne === void 0 ? void 0 : crousel1DotOne.classList.remove("dot-active");
        crousel1DotTwo === null || crousel1DotTwo === void 0 ? void 0 : crousel1DotTwo.classList.add("dot-active");
        crousel1DotThree === null || crousel1DotThree === void 0 ? void 0 : crousel1DotThree.classList.remove("dot-active");
    }
    else if ((crousel1ImgOne === null || crousel1ImgOne === void 0 ? void 0 : crousel1ImgOne.classList.contains("left-mid")) &&
        (crousel1ImgTwo === null || crousel1ImgTwo === void 0 ? void 0 : crousel1ImgTwo.classList.contains("mid-right")) &&
        (crousel1ImgThree === null || crousel1ImgThree === void 0 ? void 0 : crousel1ImgThree.classList.contains("right-left"))) {
        crousel1ImgOne.classList.remove("left-mid");
        crousel1ImgOne.classList.add("left-right");
        crousel1ImgTwo.classList.remove("mid-right");
        crousel1ImgTwo.classList.add("mid-left");
        crousel1ImgThree.classList.remove("right-left");
        crousel1ImgThree.classList.add("right-mid");
        crousel1DotOne === null || crousel1DotOne === void 0 ? void 0 : crousel1DotOne.classList.remove("dot-active");
        crousel1DotTwo === null || crousel1DotTwo === void 0 ? void 0 : crousel1DotTwo.classList.remove("dot-active");
        crousel1DotThree === null || crousel1DotThree === void 0 ? void 0 : crousel1DotThree.classList.add("dot-active");
    }
    else if ((crousel1ImgOne === null || crousel1ImgOne === void 0 ? void 0 : crousel1ImgOne.classList.contains("left-right")) &&
        (crousel1ImgTwo === null || crousel1ImgTwo === void 0 ? void 0 : crousel1ImgTwo.classList.contains("mid-left")) &&
        (crousel1ImgThree === null || crousel1ImgThree === void 0 ? void 0 : crousel1ImgThree.classList.contains("right-mid"))) {
        crousel1ImgOne.classList.remove("left-right");
        crousel1ImgOne.classList.add("left");
        crousel1ImgTwo.classList.remove("mid-left");
        crousel1ImgTwo.classList.add("mid");
        crousel1ImgThree.classList.remove("right-mid");
        crousel1ImgThree.classList.add("rightc");
        crousel1DotOne === null || crousel1DotOne === void 0 ? void 0 : crousel1DotOne.classList.add("dot-active");
        crousel1DotTwo === null || crousel1DotTwo === void 0 ? void 0 : crousel1DotTwo.classList.remove("dot-active");
        crousel1DotThree === null || crousel1DotThree === void 0 ? void 0 : crousel1DotThree.classList.remove("dot-active");
    }
});
setInterval(() => {
    if ((crousel1ImgOne === null || crousel1ImgOne === void 0 ? void 0 : crousel1ImgOne.classList.contains("left")) &&
        (crousel1ImgTwo === null || crousel1ImgTwo === void 0 ? void 0 : crousel1ImgTwo.classList.contains("mid")) &&
        (crousel1ImgThree === null || crousel1ImgThree === void 0 ? void 0 : crousel1ImgThree.classList.contains("rightc"))) {
        crousel1ImgOne.classList.remove("left");
        crousel1ImgOne.classList.add("left-mid");
        crousel1ImgTwo.classList.remove("mid");
        crousel1ImgTwo.classList.add("mid-right");
        crousel1ImgThree.classList.remove("rightc");
        crousel1ImgThree.classList.add("right-left");
        crousel1DotOne === null || crousel1DotOne === void 0 ? void 0 : crousel1DotOne.classList.remove("dot-active");
        crousel1DotTwo === null || crousel1DotTwo === void 0 ? void 0 : crousel1DotTwo.classList.add("dot-active");
        crousel1DotThree === null || crousel1DotThree === void 0 ? void 0 : crousel1DotThree.classList.remove("dot-active");
    }
    else if ((crousel1ImgOne === null || crousel1ImgOne === void 0 ? void 0 : crousel1ImgOne.classList.contains("left-mid")) &&
        (crousel1ImgTwo === null || crousel1ImgTwo === void 0 ? void 0 : crousel1ImgTwo.classList.contains("mid-right")) &&
        (crousel1ImgThree === null || crousel1ImgThree === void 0 ? void 0 : crousel1ImgThree.classList.contains("right-left"))) {
        crousel1ImgOne.classList.remove("left-mid");
        crousel1ImgOne.classList.add("left-right");
        crousel1ImgTwo.classList.remove("mid-right");
        crousel1ImgTwo.classList.add("mid-left");
        crousel1ImgThree.classList.remove("right-left");
        crousel1ImgThree.classList.add("right-mid");
        crousel1DotOne === null || crousel1DotOne === void 0 ? void 0 : crousel1DotOne.classList.remove("dot-active");
        crousel1DotTwo === null || crousel1DotTwo === void 0 ? void 0 : crousel1DotTwo.classList.remove("dot-active");
        crousel1DotThree === null || crousel1DotThree === void 0 ? void 0 : crousel1DotThree.classList.add("dot-active");
    }
    else if ((crousel1ImgOne === null || crousel1ImgOne === void 0 ? void 0 : crousel1ImgOne.classList.contains("left-right")) &&
        (crousel1ImgTwo === null || crousel1ImgTwo === void 0 ? void 0 : crousel1ImgTwo.classList.contains("mid-left")) &&
        (crousel1ImgThree === null || crousel1ImgThree === void 0 ? void 0 : crousel1ImgThree.classList.contains("right-mid"))) {
        crousel1ImgOne.classList.remove("left-right");
        crousel1ImgOne.classList.add("left");
        crousel1ImgTwo.classList.remove("mid-left");
        crousel1ImgTwo.classList.add("mid");
        crousel1ImgThree.classList.remove("right-mid");
        crousel1ImgThree.classList.add("rightc");
        crousel1DotOne === null || crousel1DotOne === void 0 ? void 0 : crousel1DotOne.classList.add("dot-active");
        crousel1DotTwo === null || crousel1DotTwo === void 0 ? void 0 : crousel1DotTwo.classList.remove("dot-active");
        crousel1DotThree === null || crousel1DotThree === void 0 ? void 0 : crousel1DotThree.classList.remove("dot-active");
    }
}, 3000);
//section-6 slider logic
const section6LeftBtn = document.querySelector("#section-6-btn-left");
const section6RightBtn = document.querySelector("#section-6-btn-right");
const section6ImgOne = document.querySelector(".section-6-img-1");
const section6ImgTwo = document.querySelector(".section-6-img-2");
const section6ImgThree = document.querySelector(".section-6-img-3");
let secction6ActiveSlide = 1;
section6RightBtn === null || section6RightBtn === void 0 ? void 0 : section6RightBtn.addEventListener("click", () => {
    if (secction6ActiveSlide === 1) {
        section6ImgOne.style.display = "none";
        section6ImgTwo.style.display = "block";
        secction6ActiveSlide = 2;
        return;
    }
    if (secction6ActiveSlide === 2) {
        section6ImgTwo.style.display = "none";
        section6ImgThree.style.display = "block";
        secction6ActiveSlide = 3;
        return;
    }
    if (secction6ActiveSlide === 3) {
        section6ImgThree.style.display = "none";
        section6ImgOne.style.display = "block";
        secction6ActiveSlide = 1;
        return;
    }
});
section6LeftBtn === null || section6LeftBtn === void 0 ? void 0 : section6LeftBtn.addEventListener("click", () => {
    if (secction6ActiveSlide === 1) {
        section6ImgOne.style.display = "none";
        section6ImgThree.style.display = "block";
        secction6ActiveSlide = 3;
        return;
    }
    if (secction6ActiveSlide === 2) {
        section6ImgTwo.style.display = "none";
        section6ImgOne.style.display = "block";
        secction6ActiveSlide = 1;
        return;
    }
    if (secction6ActiveSlide === 3) {
        section6ImgThree.style.display = "none";
        section6ImgTwo.style.display = "block";
        secction6ActiveSlide = 2;
        return;
    }
});
setInterval(() => {
    if (secction6ActiveSlide === 1) {
        section6ImgOne.style.display = "none";
        section6ImgTwo.style.display = "block";
        secction6ActiveSlide = 2;
        return;
    }
    if (secction6ActiveSlide === 2) {
        section6ImgTwo.style.display = "none";
        section6ImgThree.style.display = "block";
        secction6ActiveSlide = 3;
        return;
    }
    if (secction6ActiveSlide === 3) {
        section6ImgThree.style.display = "none";
        section6ImgOne.style.display = "block";
        secction6ActiveSlide = 1;
        return;
    }
}, 3000);
// section-7 crousel logic here
const slide1 = document.querySelector("#crousel2-slid1");
const slide2 = document.querySelector("#crousel2-slid2");
const slide3 = document.querySelector("#crousel2-slid3");
const slide4 = document.querySelector("#crousel2-slid4");
const slide5 = document.querySelector("#crousel2-slid5");
const slide6 = document.querySelector("#crousel2-slid6");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");
const card5 = document.querySelector("#card-5");
const card6 = document.querySelector("#card-6");
const slider2LeftBtn = document.querySelector("#crousel2-btn-left");
const slider2RightBtn = document.querySelector("#crousel2-btn-right");
const slider2dotOne = document.querySelector("#slider2-dot1");
const slider2dotTwo = document.querySelector("#slider2-dot2");
const slider2dotThree = document.querySelector("#slider2-dot3");
const slider2dotFour = document.querySelector("#slider2-dot4");
const slider2dotFive = document.querySelector("#slider2-dot5");
const slider2dotSix = document.querySelector("#slider2-dot6");
let activeSlide = 1;
slider2LeftBtn === null || slider2LeftBtn === void 0 ? void 0 : slider2LeftBtn.addEventListener("click", () => {
    if (activeSlide === 1) {
        slide1 === null || slide1 === void 0 ? void 0 : slide1.classList.add("translate-x");
        slide2 === null || slide2 === void 0 ? void 0 : slide2.classList.add("translate-x");
        slide3 === null || slide3 === void 0 ? void 0 : slide3.classList.add("translate-x");
        slide4 === null || slide4 === void 0 ? void 0 : slide4.classList.add("translate-x");
        slide5 === null || slide5 === void 0 ? void 0 : slide5.classList.add("translate-x");
        card1 === null || card1 === void 0 ? void 0 : card1.classList.add("translate-x");
        card2 === null || card2 === void 0 ? void 0 : card2.classList.add("translate-x");
        card3 === null || card3 === void 0 ? void 0 : card3.classList.add("translate-x");
        card4 === null || card4 === void 0 ? void 0 : card4.classList.add("translate-x");
        card5 === null || card5 === void 0 ? void 0 : card5.classList.add("translate-x");
        activeSlide = 6;
        slider2dotOne === null || slider2dotOne === void 0 ? void 0 : slider2dotOne.classList.remove("dot-active");
        slider2dotSix === null || slider2dotSix === void 0 ? void 0 : slider2dotSix.classList.add("dot-active");
        return;
    }
    if (activeSlide === 2) {
        slide1 === null || slide1 === void 0 ? void 0 : slide1.classList.remove("translate-x");
        card1 === null || card1 === void 0 ? void 0 : card1.classList.remove("translate-x");
        activeSlide = 1;
        slider2dotTwo === null || slider2dotTwo === void 0 ? void 0 : slider2dotTwo.classList.remove("dot-active");
        slider2dotOne === null || slider2dotOne === void 0 ? void 0 : slider2dotOne.classList.add("dot-active");
        return;
    }
    if (activeSlide === 3) {
        slide2 === null || slide2 === void 0 ? void 0 : slide2.classList.remove("translate-x");
        card2 === null || card2 === void 0 ? void 0 : card2.classList.remove("translate-x");
        activeSlide = 2;
        slider2dotThree === null || slider2dotThree === void 0 ? void 0 : slider2dotThree.classList.remove("dot-active");
        slider2dotTwo === null || slider2dotTwo === void 0 ? void 0 : slider2dotTwo.classList.add("dot-active");
        return;
    }
    if (activeSlide === 4) {
        slide3 === null || slide3 === void 0 ? void 0 : slide3.classList.remove("translate-x");
        card3 === null || card3 === void 0 ? void 0 : card3.classList.remove("translate-x");
        activeSlide = 3;
        slider2dotFour === null || slider2dotFour === void 0 ? void 0 : slider2dotFour.classList.remove("dot-active");
        slider2dotThree === null || slider2dotThree === void 0 ? void 0 : slider2dotThree.classList.add("dot-active");
        return;
    }
    if (activeSlide === 5) {
        slide4 === null || slide4 === void 0 ? void 0 : slide4.classList.remove("translate-x");
        card4 === null || card4 === void 0 ? void 0 : card4.classList.remove("translate-x");
        activeSlide = 4;
        slider2dotFive === null || slider2dotFive === void 0 ? void 0 : slider2dotFive.classList.remove("dot-active");
        slider2dotFour === null || slider2dotFour === void 0 ? void 0 : slider2dotFour.classList.add("dot-active");
        return;
    }
    if (activeSlide === 6) {
        slide5 === null || slide5 === void 0 ? void 0 : slide5.classList.remove("translate-x");
        card5 === null || card5 === void 0 ? void 0 : card5.classList.remove("translate-x");
        activeSlide = 5;
        slider2dotSix === null || slider2dotSix === void 0 ? void 0 : slider2dotSix.classList.remove("dot-active");
        slider2dotFive === null || slider2dotFive === void 0 ? void 0 : slider2dotFive.classList.add("dot-active");
        return;
    }
});
slider2RightBtn === null || slider2RightBtn === void 0 ? void 0 : slider2RightBtn.addEventListener("click", () => {
    if (activeSlide === 1) {
        slide1 === null || slide1 === void 0 ? void 0 : slide1.classList.add("translate-x");
        card1 === null || card1 === void 0 ? void 0 : card1.classList.add("translate-x");
        activeSlide = 2;
        slider2dotOne === null || slider2dotOne === void 0 ? void 0 : slider2dotOne.classList.remove("dot-active");
        slider2dotTwo === null || slider2dotTwo === void 0 ? void 0 : slider2dotTwo.classList.add("dot-active");
        return;
    }
    if (activeSlide === 2) {
        slide2 === null || slide2 === void 0 ? void 0 : slide2.classList.add("translate-x");
        card2 === null || card2 === void 0 ? void 0 : card2.classList.add("translate-x");
        activeSlide = 3;
        slider2dotTwo === null || slider2dotTwo === void 0 ? void 0 : slider2dotTwo.classList.remove("dot-active");
        slider2dotThree === null || slider2dotThree === void 0 ? void 0 : slider2dotThree.classList.add("dot-active");
        return;
    }
    if (activeSlide === 3) {
        slide3 === null || slide3 === void 0 ? void 0 : slide3.classList.add("translate-x");
        card3 === null || card3 === void 0 ? void 0 : card3.classList.add("translate-x");
        activeSlide = 4;
        slider2dotThree === null || slider2dotThree === void 0 ? void 0 : slider2dotThree.classList.remove("dot-active");
        slider2dotFour === null || slider2dotFour === void 0 ? void 0 : slider2dotFour.classList.add("dot-active");
        return;
    }
    if (activeSlide === 4) {
        slide4 === null || slide4 === void 0 ? void 0 : slide4.classList.add("translate-x");
        card4 === null || card4 === void 0 ? void 0 : card4.classList.add("translate-x");
        activeSlide = 5;
        slider2dotFour === null || slider2dotFour === void 0 ? void 0 : slider2dotFour.classList.remove("dot-active");
        slider2dotFive === null || slider2dotFive === void 0 ? void 0 : slider2dotFive.classList.add("dot-active");
        return;
    }
    if (activeSlide === 5) {
        slide5 === null || slide5 === void 0 ? void 0 : slide5.classList.add("translate-x");
        card5 === null || card5 === void 0 ? void 0 : card5.classList.add("translate-x");
        activeSlide = 6;
        slider2dotFive === null || slider2dotFive === void 0 ? void 0 : slider2dotFive.classList.remove("dot-active");
        slider2dotSix === null || slider2dotSix === void 0 ? void 0 : slider2dotSix.classList.add("dot-active");
        return;
    }
    if (activeSlide === 6) {
        slide1 === null || slide1 === void 0 ? void 0 : slide1.classList.remove("translate-x");
        slide2 === null || slide2 === void 0 ? void 0 : slide2.classList.remove("translate-x");
        slide3 === null || slide3 === void 0 ? void 0 : slide3.classList.remove("translate-x");
        slide4 === null || slide4 === void 0 ? void 0 : slide4.classList.remove("translate-x");
        slide5 === null || slide5 === void 0 ? void 0 : slide5.classList.remove("translate-x");
        slide6 === null || slide6 === void 0 ? void 0 : slide6.classList.remove("translate-x");
        card1 === null || card1 === void 0 ? void 0 : card1.classList.remove("translate-x");
        card2 === null || card2 === void 0 ? void 0 : card2.classList.remove("translate-x");
        card3 === null || card3 === void 0 ? void 0 : card3.classList.remove("translate-x");
        card4 === null || card4 === void 0 ? void 0 : card4.classList.remove("translate-x");
        card5 === null || card5 === void 0 ? void 0 : card5.classList.remove("translate-x");
        card6 === null || card6 === void 0 ? void 0 : card6.classList.remove("translate-x");
        activeSlide = 1;
        slider2dotSix === null || slider2dotSix === void 0 ? void 0 : slider2dotSix.classList.remove("dot-active");
        slider2dotOne === null || slider2dotOne === void 0 ? void 0 : slider2dotOne.classList.add("dot-active");
        return;
    }
});
setInterval(() => {
    if (activeSlide === 1) {
        slide1 === null || slide1 === void 0 ? void 0 : slide1.classList.add("translate-x");
        card1 === null || card1 === void 0 ? void 0 : card1.classList.add("translate-x");
        activeSlide = 2;
        slider2dotOne === null || slider2dotOne === void 0 ? void 0 : slider2dotOne.classList.remove("dot-active");
        slider2dotTwo === null || slider2dotTwo === void 0 ? void 0 : slider2dotTwo.classList.add("dot-active");
        return;
    }
    if (activeSlide === 2) {
        slide2 === null || slide2 === void 0 ? void 0 : slide2.classList.add("translate-x");
        card2 === null || card2 === void 0 ? void 0 : card2.classList.add("translate-x");
        activeSlide = 3;
        slider2dotTwo === null || slider2dotTwo === void 0 ? void 0 : slider2dotTwo.classList.remove("dot-active");
        slider2dotThree === null || slider2dotThree === void 0 ? void 0 : slider2dotThree.classList.add("dot-active");
        return;
    }
    if (activeSlide === 3) {
        slide3 === null || slide3 === void 0 ? void 0 : slide3.classList.add("translate-x");
        card3 === null || card3 === void 0 ? void 0 : card3.classList.add("translate-x");
        activeSlide = 4;
        slider2dotThree === null || slider2dotThree === void 0 ? void 0 : slider2dotThree.classList.remove("dot-active");
        slider2dotFour === null || slider2dotFour === void 0 ? void 0 : slider2dotFour.classList.add("dot-active");
        return;
    }
    if (activeSlide === 4) {
        slide4 === null || slide4 === void 0 ? void 0 : slide4.classList.add("translate-x");
        card4 === null || card4 === void 0 ? void 0 : card4.classList.add("translate-x");
        activeSlide = 5;
        slider2dotFour === null || slider2dotFour === void 0 ? void 0 : slider2dotFour.classList.remove("dot-active");
        slider2dotFive === null || slider2dotFive === void 0 ? void 0 : slider2dotFive.classList.add("dot-active");
        return;
    }
    if (activeSlide === 5) {
        slide5 === null || slide5 === void 0 ? void 0 : slide5.classList.add("translate-x");
        card5 === null || card5 === void 0 ? void 0 : card5.classList.add("translate-x");
        activeSlide = 6;
        slider2dotFive === null || slider2dotFive === void 0 ? void 0 : slider2dotFive.classList.remove("dot-active");
        slider2dotSix === null || slider2dotSix === void 0 ? void 0 : slider2dotSix.classList.add("dot-active");
        return;
    }
    if (activeSlide === 6) {
        slide1 === null || slide1 === void 0 ? void 0 : slide1.classList.remove("translate-x");
        slide2 === null || slide2 === void 0 ? void 0 : slide2.classList.remove("translate-x");
        slide3 === null || slide3 === void 0 ? void 0 : slide3.classList.remove("translate-x");
        slide4 === null || slide4 === void 0 ? void 0 : slide4.classList.remove("translate-x");
        slide5 === null || slide5 === void 0 ? void 0 : slide5.classList.remove("translate-x");
        slide6 === null || slide6 === void 0 ? void 0 : slide6.classList.remove("translate-x");
        card1 === null || card1 === void 0 ? void 0 : card1.classList.remove("translate-x");
        card2 === null || card2 === void 0 ? void 0 : card2.classList.remove("translate-x");
        card3 === null || card3 === void 0 ? void 0 : card3.classList.remove("translate-x");
        card4 === null || card4 === void 0 ? void 0 : card4.classList.remove("translate-x");
        card5 === null || card5 === void 0 ? void 0 : card5.classList.remove("translate-x");
        card6 === null || card6 === void 0 ? void 0 : card6.classList.remove("translate-x");
        activeSlide = 1;
        slider2dotSix === null || slider2dotSix === void 0 ? void 0 : slider2dotSix.classList.remove("dot-active");
        slider2dotOne === null || slider2dotOne === void 0 ? void 0 : slider2dotOne.classList.add("dot-active");
        return;
    }
}, 5000);
