// Function to evaluate a mathematical expression
function calculate(expression) {
  try {
    // Use the Function constructor to safely evaluate the expression
    const result = new Function("return " + expression)();

    // Check if the result is a finite number
    if (isFinite(result)) {
      return result;
    } else {
      throw new Error("Invalid result");
    }
  } catch (error) {
    throw new Error("Invalid expression");
  }
}

// Event listener for button clicks
function handleButtonClick(e) {
  const buttonValue = e.target.innerHTML;

  // Handle different button clicks
  if (buttonValue === "=") {
    try {
      // Get the input value and calculate the result
      const input = document.getElementById("inputBox");
      const result = calculate(input.value);
      input.value = result;
    } catch (error) {
      document.getElementById("inputBox").value = "Error";
    }
  } else if (buttonValue === "AC") {
    // Clear the input
    document.getElementById("inputBox").value = "";
  } else if (buttonValue === "DEL") {
    // Delete the last character from the input
    const input = document.getElementById("inputBox");
    input.value = input.value.slice(0, -1);
  } else {
    // Append the button value to the input
    document.getElementById("inputBox").value += buttonValue;
  }
}

// Add event listeners to calculator buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
