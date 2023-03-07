const textarea = document.getElementById("editor");
const previewDiv = document.getElementById("preview")

function previewTextarea() {
  previewDiv.innerHTML = marked(textarea.value);
}

textarea.addEventListener("input", previewTextarea)