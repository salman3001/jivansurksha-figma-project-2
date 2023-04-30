//main-navbar logic here

const mainNavbar = document.querySelector<HTMLDivElement>("#main-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    mainNavbar?.classList.add("bg-white");
  } else {
    mainNavbar?.classList.remove("bg-white");
  }
});

// SideNavbar  logic here

const burgermenu = document.querySelector<HTMLDivElement>("#burger-menu");
const sideNavbarContent = document.querySelector<HTMLDivElement>(
  "#side-navbar-content"
);

const closeBtn =
  document.querySelectorAll<HTMLImageElement>(".close-btn-togel");
const sideNavbarBackdrop = document.querySelector<HTMLDivElement>(
  "#side-navbar-backdrop"
);

sideNavbarContent?.addEventListener("click", (e) => {
  e.stopPropagation();
});

burgermenu?.addEventListener("click", () => {
  if (!sideNavbarBackdrop?.classList.contains("collapse")) {
    sideNavbarBackdrop?.classList.add("collapse");
  } else {
    sideNavbarBackdrop?.classList.remove("collapse");
  }
});

closeBtn.forEach((btn: HTMLImageElement) => {
  btn?.addEventListener("click", () => {
    if (!sideNavbarBackdrop?.classList.contains("collapse")) {
      sideNavbarBackdrop?.classList.add("collapse");
    } else {
      sideNavbarBackdrop?.classList.remove("collapse");
    }
  });
});

sideNavbarBackdrop?.addEventListener("click", () => {
  if (!sideNavbarBackdrop?.classList.contains("collapse")) {
    sideNavbarBackdrop?.classList.add("collapse");
  } else {
    sideNavbarBackdrop?.classList.remove("collapse");
  }
});

//homepage section-3 crousel logic here
const crousel1ImgOne =
  document.querySelector<HTMLImageElement>("#crousel-1-img-1");

const crousel1ImgTwo =
  document.querySelector<HTMLImageElement>("#crousel-1-img-2");
const crousel1ImgThree =
  document.querySelector<HTMLImageElement>("#crousel-1-img-3");

const crousel1Btn = document.querySelector<HTMLButtonElement>("#crousel-1-btn");
const crousel1DotOne = document.querySelector("#crousel-1-dot-1");
const crousel1DotTwo = document.querySelector("#crousel-1-dot-2");
const crousel1DotThree = document.querySelector("#crousel-1-dot-3");

crousel1Btn?.addEventListener("click", () => {
  if (
    crousel1ImgOne?.classList.contains("left") &&
    crousel1ImgTwo?.classList.contains("mid") &&
    crousel1ImgThree?.classList.contains("rightc")
  ) {
    crousel1ImgOne.classList.remove("left");
    crousel1ImgOne.classList.add("left-mid");
    crousel1ImgTwo.classList.remove("mid");
    crousel1ImgTwo.classList.add("mid-right");
    crousel1ImgThree.classList.remove("rightc");
    crousel1ImgThree.classList.add("right-left");
    crousel1DotOne?.classList.remove("dot-active");
    crousel1DotTwo?.classList.add("dot-active");
    crousel1DotThree?.classList.remove("dot-active");
  } else if (
    crousel1ImgOne?.classList.contains("left-mid") &&
    crousel1ImgTwo?.classList.contains("mid-right") &&
    crousel1ImgThree?.classList.contains("right-left")
  ) {
    crousel1ImgOne.classList.remove("left-mid");
    crousel1ImgOne.classList.add("left-right");
    crousel1ImgTwo.classList.remove("mid-right");
    crousel1ImgTwo.classList.add("mid-left");
    crousel1ImgThree.classList.remove("right-left");
    crousel1ImgThree.classList.add("right-mid");
    crousel1DotOne?.classList.remove("dot-active");
    crousel1DotTwo?.classList.remove("dot-active");
    crousel1DotThree?.classList.add("dot-active");
  } else if (
    crousel1ImgOne?.classList.contains("left-right") &&
    crousel1ImgTwo?.classList.contains("mid-left") &&
    crousel1ImgThree?.classList.contains("right-mid")
  ) {
    crousel1ImgOne.classList.remove("left-right");
    crousel1ImgOne.classList.add("left");
    crousel1ImgTwo.classList.remove("mid-left");
    crousel1ImgTwo.classList.add("mid");
    crousel1ImgThree.classList.remove("right-mid");
    crousel1ImgThree.classList.add("rightc");
    crousel1DotOne?.classList.add("dot-active");
    crousel1DotTwo?.classList.remove("dot-active");
    crousel1DotThree?.classList.remove("dot-active");
  }
});

setInterval(() => {
  if (
    crousel1ImgOne?.classList.contains("left") &&
    crousel1ImgTwo?.classList.contains("mid") &&
    crousel1ImgThree?.classList.contains("rightc")
  ) {
    crousel1ImgOne.classList.remove("left");
    crousel1ImgOne.classList.add("left-mid");
    crousel1ImgTwo.classList.remove("mid");
    crousel1ImgTwo.classList.add("mid-right");
    crousel1ImgThree.classList.remove("rightc");
    crousel1ImgThree.classList.add("right-left");
    crousel1DotOne?.classList.remove("dot-active");
    crousel1DotTwo?.classList.add("dot-active");
    crousel1DotThree?.classList.remove("dot-active");
  } else if (
    crousel1ImgOne?.classList.contains("left-mid") &&
    crousel1ImgTwo?.classList.contains("mid-right") &&
    crousel1ImgThree?.classList.contains("right-left")
  ) {
    crousel1ImgOne.classList.remove("left-mid");
    crousel1ImgOne.classList.add("left-right");
    crousel1ImgTwo.classList.remove("mid-right");
    crousel1ImgTwo.classList.add("mid-left");
    crousel1ImgThree.classList.remove("right-left");
    crousel1ImgThree.classList.add("right-mid");
    crousel1DotOne?.classList.remove("dot-active");
    crousel1DotTwo?.classList.remove("dot-active");
    crousel1DotThree?.classList.add("dot-active");
  } else if (
    crousel1ImgOne?.classList.contains("left-right") &&
    crousel1ImgTwo?.classList.contains("mid-left") &&
    crousel1ImgThree?.classList.contains("right-mid")
  ) {
    crousel1ImgOne.classList.remove("left-right");
    crousel1ImgOne.classList.add("left");
    crousel1ImgTwo.classList.remove("mid-left");
    crousel1ImgTwo.classList.add("mid");
    crousel1ImgThree.classList.remove("right-mid");
    crousel1ImgThree.classList.add("rightc");
    crousel1DotOne?.classList.add("dot-active");
    crousel1DotTwo?.classList.remove("dot-active");
    crousel1DotThree?.classList.remove("dot-active");
  }
}, 3000);

//section-6 slider logic
const section6LeftBtn = document.querySelector<HTMLImageElement>(
  "#section-6-btn-left"
);
const section6RightBtn = document.querySelector<HTMLImageElement>(
  "#section-6-btn-right"
);

const section6ImgOne =
  document.querySelector<HTMLImageElement>(".section-6-img-1");

const section6ImgTwo =
  document.querySelector<HTMLImageElement>(".section-6-img-2");

const section6ImgThree =
  document.querySelector<HTMLImageElement>(".section-6-img-3");

let secction6ActiveSlide = 1;

section6RightBtn?.addEventListener("click", () => {
  if (secction6ActiveSlide === 1) {
    (section6ImgOne as HTMLImageElement).style.display = "none";
    (section6ImgTwo as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 2;
    return;
  }
  if (secction6ActiveSlide === 2) {
    (section6ImgTwo as HTMLImageElement).style.display = "none";
    (section6ImgThree as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 3;

    return;
  }
  if (secction6ActiveSlide === 3) {
    (section6ImgThree as HTMLImageElement).style.display = "none";
    (section6ImgOne as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 1;

    return;
  }
});

section6LeftBtn?.addEventListener("click", () => {
  if (secction6ActiveSlide === 1) {
    (section6ImgOne as HTMLImageElement).style.display = "none";
    (section6ImgThree as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 3;
    return;
  }
  if (secction6ActiveSlide === 2) {
    (section6ImgTwo as HTMLImageElement).style.display = "none";
    (section6ImgOne as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 1;

    return;
  }
  if (secction6ActiveSlide === 3) {
    (section6ImgThree as HTMLImageElement).style.display = "none";
    (section6ImgTwo as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 2;

    return;
  }
});

setInterval(() => {
  if (secction6ActiveSlide === 1) {
    (section6ImgOne as HTMLImageElement).style.display = "none";
    (section6ImgTwo as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 2;
    return;
  }
  if (secction6ActiveSlide === 2) {
    (section6ImgTwo as HTMLImageElement).style.display = "none";
    (section6ImgThree as HTMLImageElement).style.display = "block";
    secction6ActiveSlide = 3;

    return;
  }
  if (secction6ActiveSlide === 3) {
    (section6ImgThree as HTMLImageElement).style.display = "none";
    (section6ImgOne as HTMLImageElement).style.display = "block";
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

const slider2LeftBtn =
  document.querySelector<HTMLImageElement>("#crousel2-btn-left");
const slider2RightBtn = document.querySelector<HTMLImageElement>(
  "#crousel2-btn-right"
);

const slider2dotOne = document.querySelector("#slider2-dot1");
const slider2dotTwo = document.querySelector("#slider2-dot2");
const slider2dotThree = document.querySelector("#slider2-dot3");
const slider2dotFour = document.querySelector("#slider2-dot4");
const slider2dotFive = document.querySelector("#slider2-dot5");
const slider2dotSix = document.querySelector("#slider2-dot6");

let activeSlide = 1;

slider2LeftBtn?.addEventListener("click", () => {
  if (activeSlide === 1) {
    slide1?.classList.add("translate-x");
    slide2?.classList.add("translate-x");
    slide3?.classList.add("translate-x");
    slide4?.classList.add("translate-x");
    slide5?.classList.add("translate-x");
    card1?.classList.add("translate-x");
    card2?.classList.add("translate-x");
    card3?.classList.add("translate-x");
    card4?.classList.add("translate-x");
    card5?.classList.add("translate-x");
    activeSlide = 6;
    slider2dotOne?.classList.remove("dot-active");
    slider2dotSix?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 2) {
    slide1?.classList.remove("translate-x");
    card1?.classList.remove("translate-x");
    activeSlide = 1;
    slider2dotTwo?.classList.remove("dot-active");
    slider2dotOne?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 3) {
    slide2?.classList.remove("translate-x");
    card2?.classList.remove("translate-x");
    activeSlide = 2;
    slider2dotThree?.classList.remove("dot-active");
    slider2dotTwo?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 4) {
    slide3?.classList.remove("translate-x");
    card3?.classList.remove("translate-x");
    activeSlide = 3;
    slider2dotFour?.classList.remove("dot-active");
    slider2dotThree?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 5) {
    slide4?.classList.remove("translate-x");
    card4?.classList.remove("translate-x");
    activeSlide = 4;
    slider2dotFive?.classList.remove("dot-active");
    slider2dotFour?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 6) {
    slide5?.classList.remove("translate-x");
    card5?.classList.remove("translate-x");
    activeSlide = 5;
    slider2dotSix?.classList.remove("dot-active");
    slider2dotFive?.classList.add("dot-active");
    return;
  }
});

slider2RightBtn?.addEventListener("click", () => {
  if (activeSlide === 1) {
    slide1?.classList.add("translate-x");
    card1?.classList.add("translate-x");
    activeSlide = 2;
    slider2dotOne?.classList.remove("dot-active");
    slider2dotTwo?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 2) {
    slide2?.classList.add("translate-x");
    card2?.classList.add("translate-x");
    activeSlide = 3;
    slider2dotTwo?.classList.remove("dot-active");
    slider2dotThree?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 3) {
    slide3?.classList.add("translate-x");
    card3?.classList.add("translate-x");
    activeSlide = 4;
    slider2dotThree?.classList.remove("dot-active");
    slider2dotFour?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 4) {
    slide4?.classList.add("translate-x");
    card4?.classList.add("translate-x");
    activeSlide = 5;
    slider2dotFour?.classList.remove("dot-active");
    slider2dotFive?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 5) {
    slide5?.classList.add("translate-x");
    card5?.classList.add("translate-x");
    activeSlide = 6;
    slider2dotFive?.classList.remove("dot-active");
    slider2dotSix?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 6) {
    slide1?.classList.remove("translate-x");
    slide2?.classList.remove("translate-x");
    slide3?.classList.remove("translate-x");
    slide4?.classList.remove("translate-x");
    slide5?.classList.remove("translate-x");
    slide6?.classList.remove("translate-x");
    card1?.classList.remove("translate-x");
    card2?.classList.remove("translate-x");
    card3?.classList.remove("translate-x");
    card4?.classList.remove("translate-x");
    card5?.classList.remove("translate-x");
    card6?.classList.remove("translate-x");
    activeSlide = 1;
    slider2dotSix?.classList.remove("dot-active");
    slider2dotOne?.classList.add("dot-active");
    return;
  }
});

setInterval(() => {
  if (activeSlide === 1) {
    slide1?.classList.add("translate-x");
    card1?.classList.add("translate-x");
    activeSlide = 2;
    slider2dotOne?.classList.remove("dot-active");
    slider2dotTwo?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 2) {
    slide2?.classList.add("translate-x");
    card2?.classList.add("translate-x");
    activeSlide = 3;
    slider2dotTwo?.classList.remove("dot-active");
    slider2dotThree?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 3) {
    slide3?.classList.add("translate-x");
    card3?.classList.add("translate-x");
    activeSlide = 4;
    slider2dotThree?.classList.remove("dot-active");
    slider2dotFour?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 4) {
    slide4?.classList.add("translate-x");
    card4?.classList.add("translate-x");
    activeSlide = 5;
    slider2dotFour?.classList.remove("dot-active");
    slider2dotFive?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 5) {
    slide5?.classList.add("translate-x");
    card5?.classList.add("translate-x");
    activeSlide = 6;
    slider2dotFive?.classList.remove("dot-active");
    slider2dotSix?.classList.add("dot-active");
    return;
  }
  if (activeSlide === 6) {
    slide1?.classList.remove("translate-x");
    slide2?.classList.remove("translate-x");
    slide3?.classList.remove("translate-x");
    slide4?.classList.remove("translate-x");
    slide5?.classList.remove("translate-x");
    slide6?.classList.remove("translate-x");
    card1?.classList.remove("translate-x");
    card2?.classList.remove("translate-x");
    card3?.classList.remove("translate-x");
    card4?.classList.remove("translate-x");
    card5?.classList.remove("translate-x");
    card6?.classList.remove("translate-x");
    activeSlide = 1;
    slider2dotSix?.classList.remove("dot-active");
    slider2dotOne?.classList.add("dot-active");
    return;
  }
}, 5000);
