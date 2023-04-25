"use strict";
const burgermenu = document.querySelector("#burger-menu");
const dropNavbar = document.querySelector("#drop-navbar");
burgermenu === null || burgermenu === void 0 ? void 0 : burgermenu.addEventListener("click", () => {
    if (!(dropNavbar === null || dropNavbar === void 0 ? void 0 : dropNavbar.classList.contains("drop-navbar-togel"))) {
        dropNavbar === null || dropNavbar === void 0 ? void 0 : dropNavbar.classList.add("drop-navbar-togel");
    }
    else {
        dropNavbar === null || dropNavbar === void 0 ? void 0 : dropNavbar.classList.remove("drop-navbar-togel");
    }
});
