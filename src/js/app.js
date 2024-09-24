// import slidersInit from "./splide";
// import clickInit from "./click";

// import burgerMenuItit from "./menu";
// import { scrollByInit, toUpInit } from "./scroll";
// import { closeInit, openInit } from "./openClose";
// import popupInit from "./popup";
// import selectorInit from "./selector";
// import filterInit from "./filter";
import "../scss/app.scss";
import scrollGsap from "./scrollGsap";
// import componentsInit from "./comfort";
import counterFn from "./counter";
import elFn from "./enemies";
import swiperFn from "./swiper";

const start = () => {
  counterFn();
  elFn();
  swiperFn();
  scrollGsap();
  // openInit();
  // closeInit();
  // selectorInit();
  // filterInit();
  //   clickInit();
  // scrollByInit();
  // toUpInit();
  // const menu = burgerMenuItit();
  // menu.open();

  console.log("loaded");
};

document.addEventListener("DOMContentLoaded", start);
