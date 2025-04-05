var mode1 = document.getElementById("mod1");
var mode2 = document.getElementById("mod2");
var mode3 = document.getElementById("mod3");

var bodytout = document.querySelector("body");
var img1 = document.querySelectorAll("#img1");

bodytout.style.border = "solid 5px gold";

mode1.addEventListener("click", function () {
    mode1.style.backgroundColor = "gold";
    mode2.style.backgroundColor = "white";
    mode3.style.backgroundColor = "black";

    bodytout.style.backgroundColor = "#f0f0f0";
    for (let i = 0; i < 12; i++) {
        img1[i].style.backgroundColor = "white";
    }
});

mode2.addEventListener("click", function () {
    mode1.style.backgroundColor = "#87cefa";
    mode2.style.backgroundColor = "gold";
    mode3.style.backgroundColor = "black";

    bodytout.style.backgroundColor = "#c0c0c0";
    for (let i = 0; i < 12; i++) {
        img1[i].style.backgroundColor = "gold";
    }
});

mode3.addEventListener("click", function () {
    mode1.style.backgroundColor = "#87cefa";
    mode2.style.backgroundColor = "white";
    mode3.style.backgroundColor = "gold";

    bodytout.style.backgroundColor = "black";
    for (let i = 0; i < 12; i++) {
        img1[i].style.backgroundColor = "white";
    }
});






var ta3dil = document.querySelectorAll("#ta3dil");
var pre = document.querySelectorAll("pre");
var ul = document.querySelectorAll("ul");

pre[0].textContent = "";
pre[1].textContent = "";
pre[2].textContent = "";
pre[3].textContent = "";

img1[0].addEventListener("click", function () {
    ul[0].className = "sousinfo2";
    pre[0].textContent = " Reference";
    pre[1].textContent = " Bazel     graduations coated in gold";
    pre[2].textContent = " Dia     Black";
    pre[3].textContent = " Bazel     graduations coated in gold";
});

img1[1].addEventListener("click", function () {
    ul[0].className = "sousinfo2";
    pre[0].textContent = " 90/100";
    pre[1].textContent = " 90/100";
    pre[2].textContent = " 90/100";
    pre[3].textContent = " 90/100";
});

img1[2].addEventListener("click", function () {
    ul[0].className = "sousinfo2";
    pre[0].textContent = "  يد الساعة / ROLEX";
    pre[1].textContent = " Bazel     graduations coated in gold";
    pre[2].textContent = " Dia     Black";
    pre[3].textContent = " Bazel     graduations coated in gold";
});

img1[3].addEventListener("click", function () {
    ul[0].className = "sousinfo2";
    pre[0].textContent = "  CHAT-GPT-YOSEF";
    pre[1].textContent = " Bazel     graduations coated in gold";
    pre[2].textContent = " Dia     Black";
    pre[3].textContent = " Bazel     graduations coated in gold";
});
