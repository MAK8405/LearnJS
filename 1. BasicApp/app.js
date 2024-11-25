console.log("Hi mom");

const btn = document.querySelector("button");

// btn.onclick = function () {
//     alert("You clicked me 🥰");
//   };
// Same as next line

btn.onclick = () => {
  alert("You clicked me 🥰");
};
