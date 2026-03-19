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

function writeDown(a, b) {
  /* let e = document.getElementById("ans");
  e.innerHTML =a + b;*/
  let e = document.querySelector("div p");
  e.textContent = a + b;
}

function calculate() {
  /*let x = document.getElementById("numberF").value;
  let y = document.getElementById("numberS").value;*/

  let x = document.querySelector("#numberF").value;
  let y = document.querySelector("#numberS").value;
  x = parseInt(x);
  y = parseInt(y);

  writeDown(x, y);
}
