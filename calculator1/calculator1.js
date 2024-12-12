const display = document.getElementById('display');

function appendNumber(number) {
  display.innerText += number;
}

function appendSymbol(symbol) {
  display.innerText += symbol;
}

function clearDisplay() {
  display.innerText = '';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
  } catch {
    display.innerText = 'Error';
  }
}