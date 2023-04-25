const burgermenu = document.querySelector<HTMLDivElement>("#burger-menu");
const dropNavbar = document.querySelector<HTMLDivElement>("#drop-navbar");

burgermenu?.addEventListener("click", () => {
  if (!dropNavbar?.classList.contains("drop-navbar-togel")) {
    dropNavbar?.classList.add("drop-navbar-togel");
  } else {
    dropNavbar?.classList.remove("drop-navbar-togel");
  }
});
