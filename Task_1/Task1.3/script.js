const form = document.getElementById("myForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Create elements
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `${name}: ${message}`;

  // Dynamic styling (alternating colors)
  if (resultsDiv.childElementCount % 2 === 0) {
    newParagraph.style.backgroundColor = "lightblue";
  } else {
    newParagraph.style.backgroundColor = "lightgreen";
  }

  // Append the result
  resultsDiv.appendChild(newParagraph);
});
