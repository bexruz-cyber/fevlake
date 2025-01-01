



let btn = document.querySelector(".light");
let industryCol = document.querySelector(".industryCol");
let industryColRectagle = document.querySelector(".industryColRectagle");

btn.addEventListener("click", function () {
  industryCol.classList.toggle("active");
  industryColRectagle.classList.toggle("industryColRectagleHidden");
  if (industryCol.classList.contains("active")) {
    btn.textContent = " Cкрыть все отрасли";
  } else {
    btn.textContent = " Раскрыть все отрасли";
  }
});

var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let swiperpaginationbullet = document.querySelectorAll(".swiper-pagination-bullet") 
const tabFun = () => {
    swiperpaginationbullet[0].textContent = ">> Безопасность и устойчивость бизнеса"
    swiperpaginationbullet[1].textContent = ">> Развитие бизнеса" 
    swiperpaginationbullet[2].textContent = ">> Экспертная поддержка"
}
tabFun()

var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `0<span class="${currentClass}"></span> / 0<span class="${totalClass}"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

var swiper2 = new Swiper(".mySwiper3", {
  slidesPerView: 5.1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `0<span class="${currentClass}"></span> / 0<span class="${totalClass}"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
  },
});

let priceRow = document.querySelectorAll(".price-row-item-top");
let priceBtn = document.querySelectorAll(".price-row-item-top-btn");

let priceText = document.querySelectorAll(".price-row-item-top-text");

priceRow.forEach(function (item, index) {
  item.addEventListener("click", function () {
    priceText[index].classList.toggle("open");
    priceBtn[index].classList.toggle("rorate");
  });
});

var swiper3 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

// const submitButton = document.querySelector("#submitButton");

// submitButton.addEventListener("click", () => {
//   modal.style.display = "none";
// });

const modal = document.querySelector(".modal");
const modalOpen = document.querySelectorAll(".modalOpen")
const modalCloseBg = document.querySelector(".modalCloseBg")
modalOpen.forEach(function(item){
  item.addEventListener("click", () => {
    modal.style.display = "block";
  })
})
modalCloseBg.addEventListener("click", () => {
  modal.style.display = "none";
})

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submitButton");
  const inputs = form.querySelectorAll("input, textarea");
  const phoneInput = document.getElementById("phone");

  // Telefon raqamini formatlash funksiyasi
  function formatPhoneNumber(value) {
    const cleaned = value.replace(/\D+/g, ""); // Faqat raqamlarni olib qolish
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
    }

    return value;
  }

  // Telefon raqamini validatsiya qilish funksiyasi
  function validatePhoneNumber(value) {
    return /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/.test(value);
  }

  // Inputga formatni qo'llash
  phoneInput.addEventListener("input", () => {
    const formattedValue = formatPhoneNumber(phoneInput.value);
    phoneInput.value = formattedValue;

    // Validatsiya va xatoliklarni yangilash
    validateInput(phoneInput);
    validateForm();
  });

  // Inputni validatsiya qilish funksiyasi
  function validateInput(input) {
    const errorMessage = form.querySelector(
      `.error-message[data-for="${input.id}"]`
    );
    const inputContainer = input.closest(".input-container");
    let modalBtn = document.querySelector(".modalBtn");
    let isValid = true;

    if (!input.value.trim()) {
      isValid = false;
    } else if (
      input.type === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
    ) {
      isValid = false;
    } else if (input.type === "tel" && !validatePhoneNumber(input.value)) {
      isValid = false;
    }

    // Xatolikni ko'rsatish yoki yashirish
    if (!isValid) {
      inputContainer.classList.add("invalid");
      inputContainer.classList.remove("valid");
      modalBtn.classList.remove("btnValid");
      if (errorMessage) {
        errorMessage.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_399_184)">
        <path d="M10.0001 1.66797C5.40008 1.66797 1.66675 5.4013 1.66675 10.0013C1.66675 14.6013 5.40008 18.3346 10.0001 18.3346C14.6001 18.3346 18.3334 14.6013 18.3334 10.0013C18.3334 5.4013 14.6001 1.66797 10.0001 1.66797ZM10.8334 14.168H9.16675V12.5013H10.8334V14.168ZM10.8334 10.8346H9.16675V5.83464H10.8334V10.8346Z" fill="#D84F54"/>
        </g>
        <defs>
        <clipPath id="clip0_399_184">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `;
      }
    } else {
      inputContainer.classList.remove("invalid");
      inputContainer.classList.add("valid");
      modalBtn.classList.add("btnValid");
      if (errorMessage) {
        errorMessage.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_399_946)">
        <path d="M10.0001 1.66797C5.40008 1.66797 1.66675 5.4013 1.66675 10.0013C1.66675 14.6013 5.40008 18.3346 10.0001 18.3346C14.6001 18.3346 18.3334 14.6013 18.3334 10.0013C18.3334 5.4013 14.6001 1.66797 10.0001 1.66797ZM8.33341 14.168L4.16675 10.0013L5.34175 8.8263L8.33341 11.8096L14.6584 5.48464L15.8334 6.66797L8.33341 14.168Z" fill="#2B2B2B"/>
        </g>
        <defs>
        <clipPath id="clip0_399_946">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `;
      }
    }

    return isValid;
  }

  // Umumiy formani validatsiya qilish
  function validateForm() {
    let allValid = true;
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        allValid = false;
      }
    });
    submitButton.disabled = !allValid;
  }

  // Har bir inputni o'zgarishda tekshirish
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validateInput(input);
      validateForm();
    });
  });

  // Formani yuborishdan oldin validatsiya qilish
  form.addEventListener("submit", (event) => {
    validateForm();
    if (submitButton.disabled) {
      event.preventDefault();
      alert("Заполните все поля корректно.");
    } else {
      modal.style.display = "none"; // Modalni yashirish
    }
  });

  // Submit tugmasi bosilganda modalni yashirish
  submitButton.addEventListener("click", () => {
    if (!submitButton.disabled) {
      modal.style.display = "none"; // Modalni yashirish
    }
  });
});



const workDropdownBtn = document.querySelector(".workDropdownBtn")
const workDropdown = document.querySelector(".workDropdown")

workDropdownBtn.addEventListener("click", () => {
  workDropdown.classList.toggle("show")
  workDropdownBtn.classList.toggle("mb-0")
})