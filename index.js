let rate = document.querySelector(".rating-card");
let thank = document.querySelector(".thank-card");
let num = document.querySelector(".number").textContent;
let list = document.querySelectorAll("li").length;
let submit = document.querySelector(".submit");

// for buttons (li's) //

for (let i = 0; i < list; i++) {
    document.querySelectorAll(".lo")[i].addEventListener("click", function (e) {
        for (let j = 0;  j< list; j++) {  
        let  remove = document.querySelectorAll(".lo")[j]; 
        remove.classList.remove("active");         
        }
        e.target.classList.add("active");
        document.querySelector(".hidden").style.display = "none" 
        var num2 =  e.target.textContent;
        num = num2;
    });
}

// for submit buttons //

submit.addEventListener("click", function () {
    if (num === "0") {
        document.querySelector(".hidden").style.display = "block";
    } else {
    rate.style.display = "none";
    thank.style.display = "block";
    document.querySelector(".number").textContent = num;
    }
});