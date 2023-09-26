const scriptURL =
  "https://script.google.com/macros/s/AKfycbw09SMrjLt53j-oxiCA8OlnOn0LYq6DdxI8R3lRCVSFQZ1Rq1uhSJ3LbL8z6giOhHFQ/exec";
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
