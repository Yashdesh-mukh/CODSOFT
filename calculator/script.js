const inputBox = document.getElementById("inputbox");
const buttons = document.querySelectorAll(".calculator button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      inputBox.value = "";
    } else if (button.textContent === "DEL") {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (button.textContent === "=") {
      try {
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        inputBox.value = "Error";
      }
    } else {
      inputBox.value += button.textContent;
    }
  });
});