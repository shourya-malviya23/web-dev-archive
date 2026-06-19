let text = document.getElementById("text-input");
let charCount = document.getElementById("char-count");
text.addEventListener("input", () => {
  let textLen = text.value.length;
  if (textLen >= 50) {
    text.value = text.value.slice(0, 50);
    textLen = 50;
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }

  charCount.innerText = `Character count: ${textLen}/50`;
});
