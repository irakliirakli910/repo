// function print(name, lName, age) {
//   return `${name} ${lName} არის ${age} წლის`;
// }

// function main() {
//   //   let user = {
//   //     name: "შალვა",
//   //     lName: "ორჯონიკიძე",
//   //     age: 55,
//   //   };

//   //   user.friend = "გელა";
//   //   user.age = 77;

//   //   console.log(user);

//   //   let t = print(user.name, user.lName, user.age);
//   //   let d = print("გელა", "ბარკალაია", "155");
//   //   console.log(t);
//   //   console.log(d);

//   let a = [
//     {
//       name: "შალვა",
//       lName: "ორჯონიკიძე",
//       age: 55,
//       firends: ["დათო", "ბელა", "გელა"],
//     },
//     {
//       name: "გელა",
//       lName: "ორჯონიკიძე",
//       age: 55,
//       firends: ["დათო", "ბელა", "გელა"],
//     },
//     {
//       name: "დათო",
//       lName: "ორჯონიკიძე",
//       age: 55,
//       firends: ["დათო", "ბელა", "გელა"],
//     },
//     {
//       name: "დემეტრე",
//       lName: "ორჯონიკიძე",
//       age: 55,
//       firends: ["დათო", "ბელა", "გელა"],
//     },
//     {
//       name: "გიგა",
//       lName: "ორჯონიკიძე",
//       age: 55,
//       firends: ["დათო", "ბელა", "გელა"],
//     },
//   ];

//   a.forEach((e) => {
//     let k = print(e.name, e.lName, e.age);
//     console.log(k);
//   });
// }

// main();

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
