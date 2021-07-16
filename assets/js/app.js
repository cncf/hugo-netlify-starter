// left nav at small sizes show/hide

function myTest() {
  console.log("hi");
}


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
  // myTest();
});
