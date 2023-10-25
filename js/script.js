// To top button

const toTop = document.querySelector("#toTop");

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 150){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active");
    }
})


// Responsive Nav

const bars = document.querySelector(".bars");
const responsiveNav = document.querySelector(".responsiveMenu");


bars.addEventListener("click", function(){
    responsiveNav.classList.toggle("active");
    if(bars.classList.toggle("active")){
        bars.querySelector("svg").classList.replace("fa-bars", "fa-xmark")
        bars.style.color = "2D3748"
    }else{
        bars.querySelector("svg").classList.replace("fa-xmark", "fa-bars")
        bars.style.color = "white"
    }
})


const inputBtn = document.querySelector(".inputBtn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");

// inputBtn.addEventListener("click", function(){
//     if(email.value === ""){
//         result1.textContent = "Please enter your Email";
//     }else{
//         result1.textContent = "Your email is confirmed"
//         result1.style.color = "green"
//     }
// })

inputBtn.addEventListener("click", function(){
    const mailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailRegex)){
        result1.textContent = "Valid email address !";
        result1.style.color = "green"
        return true;
    }else{
        result1.textContent = "You have entered an invalid email address !";
        result1.style.color = "red"
        return false;
    }
})


inputBtn.addEventListener("click", function(){
    if(password.value === ""){
        result2.textContent = "Please enter your Password";
        result2.style.color = "red"
    }else{
        result2.textContent = "Your Password is ok"
        result2.style.color = "green"
    }
})

