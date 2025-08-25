

const display = document.querySelector(".inward");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let justCalculated = false; 

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
      justCalculated = false;
    } 
    else if (value === "=") {
      calculateResult();
    } 
    else {
      handleInput(value);
    }
  });
});

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter") {
    calculateResult();
  } 
  else if (key === "Escape") {
    currentInput = "";
    display.value = "";
    justCalculated = false;
  } 
  else if ("0123456789+-*/.".includes(key)) {
    handleInput(key);
  }
});

// Function for input handling
function handleInput(value) {
  if (justCalculated) {
    if ("0123456789.".includes(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }
    justCalculated = false;
  } else {
    currentInput += value;
  }
  display.value = currentInput;
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    justCalculated = true; 
  } catch (error) {
    display.value = "Error";
    currentInput = "";
    justCalculated = false;
  }
}
