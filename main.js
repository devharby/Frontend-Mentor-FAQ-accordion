let answer = document.getElementsByClassName("answer");
let show = document.getElementsByClassName("show");
let hide = document.getElementsByClassName("hide");

show.onclick = function () {
  answer.style.display = "block";
};

hide.onclick = function () {
  answer.style.display = "none";
};
