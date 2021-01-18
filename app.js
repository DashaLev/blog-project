// mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

// contact form
let formFeedback = document.querySelector(".feedback");
let openFormBtn = document.querySelector(".open-form-btn");

openFormBtn.addEventListener("click",function(){
    formFeedback.classList.toggle("show");
    if(formFeedback.classList.contains("show")) {
        openFormBtn.classList.add("show-button");
        openFormBtn.textContent = openFormBtn.textContent = "CLOSE FORM";
    } else {
        openFormBtn.classList.remove("show-button");
        openFormBtn.textContent = openFormBtn.textContent = "OPEN FORM";
    }
})