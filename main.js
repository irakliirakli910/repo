
let but = document.querySelector("div div button");

but.addEventListener("click", function () {
  calculate();
});

function calculate() {
  /*let x = document.getElementById("numberF").value;
  let y = document.getElementById("numberS").value;*/

  let x = document.querySelector("div div input").value;
  let y = document.querySelector("#numberS").value;
  let op = document.querySelector("#op").value;
  x = parseInt(x);
  y = parseInt(y);
  let e = document.querySelector("div p");

  switch (op) {
    case "+":
      e.textContent = x + "+" + y + " = " + (x + y);
      break;
    case "-":
      e.textContent = `${x} - ${y}=${x - y}`;
      break;
    case "*":
      e.textContent = x * y;
      break;
    case "/":
      e.textContent = x / y;
      break;
    default:
      e.textContent = "ოპერაცია  ვერ ამოვიცანი";
  }
}
