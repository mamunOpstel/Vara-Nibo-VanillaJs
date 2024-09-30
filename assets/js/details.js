const closeBtns = document.getElementsByClassName("close-modal");
const submitBtn = document.getElementById("form-submit-btn");
const nameValue = document.getElementById("form-name");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-phone");
const message = document.getElementById("form-message");

let initialFormData = {};
function handleSubmit() {
  [nameValue, email, phone, message].forEach((inp) => {
    initialFormData[inp.name] = inp.value;
  });

    console.log(initialFormData);

  // Clear form fields
  [nameValue, email, phone, message].forEach((inp) => {
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
