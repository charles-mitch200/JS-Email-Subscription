const scriptURL =
  "";
const form = document.forms["submit-to-google-sheet"];
const spanElem = document.getElementById("js-success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      spanElem.style.display = "block";
      setTimeout(() => {
        spanElem.style.display = "none";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
