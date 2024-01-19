const ratingBtn = document.querySelectorAll(".btn");
const rate = document.querySelector(".rate");
const submitButton = document.querySelector(".submit-btn");
const thankYouCard = document.querySelector(".container-2");
const ratingCard = document.querySelector(".container");

submitButton.addEventListener("click", (event)=> {
  thankYouCard.classList.remove("hidden");
  ratingCard.style.display = "none";
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    .btn:focus =
    if
  })
});



// document.querySelectorAll(".btn").forEach((btn) => {
//   // console.log(btn);
//   btn.addEventListener("click", (event) => {
//     // console.log("Clicked the button!");

//     // use event.target.innerText to indicate rating
//     if (rate) {
//       rate = event.target.innerText {
//   rate.innerHTML
//     }
//     });
//   });
// // });


// when button clicked this will hide current card and show card 2
// when the clicked button:focus this would take the target.innertext
// display the innertext of the entire text to display on button
