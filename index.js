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
    // console.log(btn.innerText);
    rate.innerHTML = btn.innerText ;
    // console.log(event.target.innerText);

  })
});
