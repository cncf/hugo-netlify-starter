const navbarBurger = () => {
  const burger = $(".navbar-burger"),
    menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

$(() => {
  console.log("Welcome to the CNCF's Hugo + Netlify starter");
  navbarBurger();
});

// show/hide left nav at small sizes
document.getElementById("leftnavToggle").onclick = function() {
  toggleNav()
};

function toggleNav() {
  var leftnav = document.getElementById("leftnav");
  if (leftnav.style.display === "none") {
    leftnav.style.display = "block";
    leftnavToggle.classList.add("open");
  } else {
    leftnav.style.display = "none";
    leftnavToggle.classList.remove("open");
  }
}
