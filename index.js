var rate = document.querySelector(".rating-card");
var thank = document.querySelector(".thank-card");
var submit = document.querySelector(".submit");
var num = document.querySelector(".number").textContent;
var list = document.querySelectorAll("li").length;

// for buttons (li's) //

for (var i = 0; i < list; i++) {
    document.querySelectorAll("li")[i].addEventListener("click", function (e) {
let color = document.querySelector(".active");
color.classList.remove("active");
e.target.classList.add("active");
num = e.target.textContent;
        document.querySelector(".hidden").style.display = "none";
    });
    
}

// for submit //

submit.addEventListener("click", function () {
    if (num === "0") {
        document.querySelector(".hidden").style.display = "block";
    }else{
            rate.style.display = "none";
            thank.style.display = "block";
            document.querySelector(".number").textContent = num;
    }

});