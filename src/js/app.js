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
// import enemies from "./enemies";
import counterFn from "./counter";
import swiperFn from "./swiper";
import menuAdapt from "./menuAdapt"
import popup__adapt from "./pop-up__adapt";
import lazy from "./lazy-video"
import base__pop from "./base__pop-up";
import list from "./list"
import enemies from "./enemies"

const start = () => {
  scrollGsap();
  counterFn();
  menuAdapt();
  swiperFn();
  popup__adapt();
  lazy();
  base__pop();
  list();
  enemies();
};

document.addEventListener("DOMContentLoaded", start);
