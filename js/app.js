let hmgr = document.querySelector(".header-hmgr")
let exit = document.querySelector(".exit-btn")
let hamburger_bar = document.querySelector(".hamburger-bar")
let body = document.querySelector('body') 

hmgr.addEventListener('click' , function(){
    hamburger_bar.style.left = '0'
    body.style.overflowY = 'hidden'
})
exit.addEventListener('click' , function(){
    hamburger_bar.style.left = '-100%'
    body.style.overflowY = 'scroll'
})