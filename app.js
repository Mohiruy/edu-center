//Time
setInterval(tick, 1000);

function tick()
{
    var timeview = document.getElementById("time");
    var t = new Date();
    timeview.innerHTML = t.toLocaleTimeString();
    day();
}

function day() {
    var d = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
    document.getElementById("day").innerHTML = d;

}

//Multiple options dropdown
//https://codepen.io/gatoledo1/pen/QWmpWjK

const optionMenu = document.querySelector("#select-menu1"),
  selectBtn = optionMenu.querySelector("#select-btn1"),
  options = optionMenu.querySelectorAll("#option1"),
  sBtn_text = optionMenu.querySelector("#sBtn-text1");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector("#option-text1").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});


const optionMenu2 = document.querySelector("#select-menu2"),
  selectBtn2 = optionMenu2.querySelector("#select-btn2"),
  options2 = optionMenu2.querySelectorAll("#option2"),
  sBtn_text2 = optionMenu2.querySelector("#sBtn-text2");

selectBtn2.addEventListener("click", () =>
  optionMenu2.classList.toggle("active")
);

options2.forEach((option2) => {
  option2.addEventListener("click", () => {
    let selectedOption2 = option2.querySelector("#option-text2").innerText;
    sBtn_text2.innerText = selectedOption2;

    optionMenu2.classList.remove("active");
  });
});


const optionMenu3 = document.querySelector("#select-menu3"),
  selectBtn3 = optionMenu3.querySelector("#select-btn3"),
  options3 = optionMenu3.querySelectorAll("#option3"),
  sBtn_text3 = optionMenu3.querySelector("#sBtn-text3");

selectBtn3.addEventListener("click", () =>
  optionMenu3.classList.toggle("active")
);

options3.forEach((option3) => {
  option3.addEventListener("click", () => {
    let selectedOption3 = option3.querySelector("#option-text3").innerText;
    sBtn_text3.innerText = selectedOption3;

    optionMenu3.classList.remove("active");
  });
});

const optionMenu4 = document.querySelector("#select-menu4"),
  selectBtn4 = optionMenu4.querySelector("#select-btn4"),
  options4 = optionMenu4.querySelectorAll("#option4"),
  sBtn_text4 = optionMenu4.querySelector("#sBtn-text4");

selectBtn4.addEventListener("click", () =>
  optionMenu4.classList.toggle("active")
);

options4.forEach((option4) => {
  option4.addEventListener("click", () => {
    let selectedOption4 = option4.querySelector("#option-text4").innerText;
    sBtn_text4.innerText = selectedOption4;

    optionMenu4.classList.remove("active");
  });
});


const optionMenu5 = document.querySelector("#select-menu5"),
  selectBtn5 = optionMenu5.querySelector("#select-btn5"),
  options5 = optionMenu5.querySelectorAll("#option5"),
  sBtn_text5 = optionMenu5.querySelector("#sBtn-text5");

 selectBtn5.addEventListener("click", () =>
  optionMenu5.classList.toggle("active")
);

options5.forEach((option5) => {
  option5.addEventListener("click", () => {
    let selectedOption5 = option5.querySelector("#option-text5").innerText;
    sBtn_text5.innerText = selectedOption5;

    optionMenu5.classList.remove("active");
  });
});

const optionMenu6 = document.querySelector("#select-menu6"),
  selectBtn6 = optionMenu6.querySelector("#select-btn6"),
  options6 = optionMenu6.querySelectorAll("#option6"),
  sBtn_text6 = optionMenu6.querySelector("#sBtn-text6");

  selectBtn6.addEventListener("click", () =>
  optionMenu6.classList.toggle("active")
);

options6.forEach((option6) => {
  option6.addEventListener("click", () => {
    let selectedOption6 = option6.querySelector("#option-text6").innerText;
    sBtn_text6.innerText = selectedOption6;

    optionMenu6.classList.remove("active");
  });
});