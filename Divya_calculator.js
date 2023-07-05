// Function to evaluate mathematical expressions
function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return 'Error';
  }
}

// Function to handle button clicks
function handleButtonClick(value) {
  if (value === '=') {
    const expression = document.getElementById('display').value;
    const result = evaluateExpression(expression);
    document.getElementById('display').value = result;
  } else if (value === 'C') {
    document.getElementById('display').value = '';
  } else {
    document.getElementById('display').value += value;
  }
}

// Add event listeners to buttons
document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    handleButtonClick(button.value);
  });
});
