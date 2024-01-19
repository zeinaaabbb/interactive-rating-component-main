const ratingBtn = document.querySelectorAll(".btn");
const rate = document.querySelector(".rate");
const submitButton = document.querySelector(".submit-btn");
const thankYouCard = document.querySelector(".container-2");
const ratingCard = document.querySelector(".container");


//querySelector the class on the submit button
//listen for click of the submit button
//remove the "hidden" CSS style from container-2
//display none and hide the first card container

submitButton.addEventListener("click", (event)=> {
  thankYouCard.classList.remove("hidden");
  ratingCard.style.display = "none";
});

//queryselectorAll button rating
//iterate through all the rating button
//create an event listener for the click
//will obtain the button.innerText
//rate innerHTML is = to the btn innerText

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(btn.innerText);
    rate.innerHTML = btn.innerText ;
    // console.log(event.target.innerText);

  })
});
