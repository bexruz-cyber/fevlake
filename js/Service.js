let btn = document.querySelector(".light");
let industryCol = document.querySelector(".industryCol");
let industryColRectagle = document.querySelector(".industryColRectagle");

btn.addEventListener("click", function() {
    industryCol.classList.toggle("active");
    industryColRectagle.classList.toggle("industryColRectagleHidden");
    if (industryCol.classList.contains("active")) {
        btn.textContent = " Cкрыть все отрасли";
    } else {
        btn.textContent = " Раскрыть все отрасли";
    }
});
