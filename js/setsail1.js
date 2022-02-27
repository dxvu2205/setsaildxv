const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openBars = $(".header__bars");
const navbar_onmenu = $(".navbar_onmenu");
const offmenu = $(".off");

//dấu X trên header
openBars.onclick = function () {
  $(".navbar_display").classList.toggle("display_none");
  this.classList.toggle("open");
  //   navbar_onmenu.classList.toggle("header__bars-offmenu");
  navbar_onmenu.classList.toggle("header__bars-onmenu");
  $(".navbar_main").classList.toggle("navbar_mainopen");
};
$(".navbar_display").onclick = function () {
  this.classList.toggle("display_none");
  navbar_onmenu.classList.remove("header__bars-onmenu");
  openBars.classList.remove("open");
};
// slide
const chevronLeft = $(".fa-chevron-left");
const chevronRight = $(".fa-chevron-right");
const sliderMain = $(".main__slider");
const sliderItems = $$(".main__top-slider");
const sliderLength = sliderItems.length;
const sliderItemwidth = sliderItems[0].offsetWidth;
let postionX = 0;
let slideNumber = 0;
//
chevronRight.addEventListener("click", () => {
  $(".main__top-slider.active").classList.remove("active");
  slideNumber++;
  if (slideNumber > sliderLength - 1) {
    slideNumber = 0;
  }

  sliderItems[slideNumber].classList.add("active");
});
//
chevronLeft.addEventListener("click", () => {
  $(".main__top-slider.active").classList.remove("active");

  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = sliderLength - 1;
  }
  sliderItems[slideNumber].classList.add("active");
});
//slider autoplay
let playSlider;
var repeater = () => {
  playSlider = setInterval(function () {
    $(".main__top-slider.active").classList.remove("active");
    slideNumber++;
    if (slideNumber > sliderLength - 1) {
      slideNumber = 0;
    }

    sliderItems[slideNumber].classList.add("active");
  }, 6000);
};
repeater();
// scroll header
const scrollHeader = $(".header");
const counters = $$(".wpb_wrapper-ramdom-number");
const speed = 100;
window.onscroll = () => {
  const top = window.scrollY;
  console.log(top);
  if (top <= 667) {
    scrollHeader.classList.remove("activeScroll");
    $(".ontop").classList.remove("Showontop");
  } else if (top >= 3270) {
    //ramdom number
    // console.log(1);
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        // console.log(target);
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = Math.floor(target / speed);

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = count + inc;
          // Call function every ms
          setTimeout(updateCount, 200);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  } else {
    scrollHeader.classList.add("activeScroll");
    $(".ontop").classList.add("Showontop");
  }
};
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1000,
});
ScrollReveal().reveal(".main__intro-titletry", {
  // delay: 300,
  origin: "bottom",
});
ScrollReveal().reveal(".main__intro-titlewiner", {
  // delay: 400,
  origin: "bottom",
});
ScrollReveal().reveal(".main__intro-bottom-content", {
  origin: "left",
});

// onclick ontop
function scrollOnTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
// hover items wrapper
const ItemWrapper = $$(".wpb_wrapper-item");
const ItemsWrapper = $(".wpb_wrapper");
const WrapperContent = $(".wpb_wrapper-content");

ItemWrapper.forEach((each) => {
  each.onmouseover = () => {
    each.children[1].classList.add("onhover");
  };
});
ItemWrapper.forEach((each) => {
  each.onmouseout = () => {
    each.children[1].classList.remove("onhover");
  };
});
