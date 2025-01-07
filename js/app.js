let hmgr = document.querySelector(".header-hmgr");
let exit = document.querySelector(".exit-btn");
let hamburger_bar = document.querySelector(".hamburger-bar");
let body = document.querySelector("body");

hmgr.addEventListener("click", function () {
  hamburger_bar.style.left = "0";
  body.style.overflowY = "hidden";
});
exit.addEventListener("click", function () {
  hamburger_bar.style.left = "-100%";
  body.style.overflowY = "scroll";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});
console.log(swiper[0]);

let swiperpaginationbullet = document.querySelectorAll(".swiper-pagination-bullet") 
const tabFun3 = () => {
  const content = [
    { index: 0, text: '>> Data Platform' },
    { index: 1, text: '>> Infrastructure' },
    { index: 2, text: '>> Yandex.cloud' },
    { index: 3, text: '>> DevSecOps' }
  ];

  content.forEach(item => {
    swiperpaginationbullet[item.index].textContent = item.text;
  });
};

tabFun3();



var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    864: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
