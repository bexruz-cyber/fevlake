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
const tabFun = () => {
    swiperpaginationbullet[0].textContent = ">> Data Platform"
    swiperpaginationbullet[1].textContent = ">> Infrastructure"
    swiperpaginationbullet[2].textContent = ">> Yandex.cloud"
    swiperpaginationbullet[3].textContent = ">> DevSecOps"
}
tabFun()

document.addEventListener("DOMContentLoaded", () => {
  const tabs = [
    {
      element: document.querySelector(".platformPaginationBtn-1"),
      index: 0,
    },
    {
      element: document.querySelector(".platformPaginationBtn-2"),
      index: 1,
    },
    {
      element: document.querySelector(".platformPaginationBtn-3"),
      index: 2,
    },
    {
      element: document.querySelector(".platformPaginationBtn-4"),
      index: 3,
    },
  ];

  const handleTabClick = (clickedTab, index) => {
    return (e) => {
      e.preventDefault();
      swiper[0].slideTo(index, 0);

      // Aktiv klasslarni boshqarish
      tabs.forEach(({ element }) =>
        element.classList.remove("platformPaginationBtnActive")
      );
      clickedTab.classList.add("platformPaginationBtnActive");
    };
  };

  // Har bir tab uchun hodisa tayinlash
  tabs.forEach(({ element, index }) => {
    if (element) {
      element.addEventListener("click", handleTabClick(element, index));
    }
  });
});

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
