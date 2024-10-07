import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const scrollGsap = () => {
  console.log("test6");
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1100px)", () => {
    gsap.to(".oil-man__logo-sunflower", {

      scrollTrigger: {
        trigger: ".oil-man",
        start: "-600px top",
        end: "-300px top",
        scrub: 2,
        ease: "power2"
      },
      duration: 10,
      y: "-640px",

    });
  });

  mm.add("(max-width: 1099px)", () => {
    gsap.to(".sunflower__wrapper", {
      scrollTrigger: {
        trigger: ".oil-man",
        start: "-600px top",
        end: "-300px top",
        scrub: true,
        ease: "power2"
      },
      duration: 5,
      y: "0",
    });
  });

  gsap.to("#image-cap1", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-400px",
  });
  gsap.to("#image-cap2", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-200px",
  });
  gsap.to("#image-cap6", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-200px top",
      end: "100px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-200px",
  });
  gsap.to("#image-cap11", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-200px top",
      end: "100px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-200px",
  });
  gsap.to("#image-cap7", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-200px",
  });
  gsap.to("#image-cap5", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-500px top",
      end: "-100px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-100px",
  });
  gsap.to("#image-cap3", {
    duration: 20,
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "300px top",
      scrub: true,
      ease: "power2",

    },
    y: "-300px",
  });
  gsap.to("#image-cap4", {
    duration: 20,
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power2",

    },
    y: "-350px",
  });
  gsap.to("#image-cap12", {
    duration: 20,
    scrollTrigger: {
      trigger: ".savings",
      start: "-200px top",
      end: "100px top",
      scrub: true,
      ease: "power2",

    },
    y: "-100px",
  });
  gsap.to("#image-cap8", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-200px",
  });
  gsap.to("#image-cap9", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power2",

    },
    duration: 5,
    y: "-100px",
  });
  gsap.to("#image-cap10", {
    scrollTrigger: {
      trigger: ".savings",
      start: "-100px top",
      end: "200px top",
      scrub: true,
      ease: "power1.out",

    },
    duration: 5,
    y: "-200px",
  });
};
export default scrollGsap;
