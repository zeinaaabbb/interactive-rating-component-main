
document.querySelectorAll(".btn").forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", (event) => {
    // console.log("Clicked the button!");
    // use event.target.innerText to indicate rating
    console.log(event.target.innerText);
  });
});


// document.querySelectorAll("img").forEach((img) => {
//   img.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("img-circle");
//   });
// });
