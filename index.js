let num1El = document.getElementById("num1");
let num2El = document.getElementById("num2");
let operatorEl = document.getElementById("operator");
let resultEl = document.getElementById("result");

function oncheckresult() {
  let num1Val = parseInt(num1El.value);
  let num2Val = parseInt(num2El.value);
  let operatorVal = operatorEl.value;

  console.log(num1Val, num2Val, operatorVal);

  if (isNaN(num1Val) || isNaN(num2Val) || operatorVal === "") {
    resultEl.textContent = "Fill all the input fields correctly";
    resultEl.style.color = "red";
    return;
  }

  let result;
  switch (operatorVal) {
    case "+":
      result = num1Val + num2Val;
      break;
    case "-":
      result = num1Val - num2Val;
      break;
    case "*":
      result = num1Val * num2Val;
      break;
    case "/":
      if (num2Val === 0) {
        resultEl.textContent = "Cannot divide by zero";
        resultEl.style.color = "red";
        return;
      }
      result = num1Val / num2Val;
      break;
    default:
      resultEl.textContent = "Invalid operator";
      resultEl.style.color = "red";
      return;
  }

  console.log(result);
  resultEl.textContent = `Result: ${result}`;
  resultEl.style.color = "black";
}
