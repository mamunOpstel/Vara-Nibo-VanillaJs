const closeBtns = document.getElementsByClassName("close-modal");
const submitBtn = document.getElementById("form-submit-btn");
const nameValue = document.getElementById("form-name");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-phone");
const message = document.getElementById("form-message");
const thanksmodal = document.getElementById("thanks-modal");

let initialFormData = {};

function toggleThanksModal() {
  thanksmodal.classList.remove("hidden");
  setTimeout(() => {
    thanksmodal.classList.add("hidden");
    console.log("toggled");
  }, 1500);
}
function handleSubmit() {
  [nameValue, email, phone, message].forEach((inp) => {
    initialFormData[inp.name] = inp.value;
  });

  console.log(initialFormData);
  toggleThanksModal()[
    // Clear form fields
    (nameValue, email, phone, message)
  ].forEach((inp) => {
    inp.value = "";
  });
}

function closeModal() {
  // Clear form fields
  [nameValue, email, phone, message].forEach((inp) => {
    inp.value = "";
  });
}

closeBtns[0].addEventListener("click", closeModal);
closeBtns[1].addEventListener("click", closeModal);
submitBtn.addEventListener("click", handleSubmit);
