let display = document.getElementById('display');
let current = '';
let operator = '';
let waitingForOperand = false;

function appendNum(num) {
  if (waitingForOperand) {
    current = '';
    waitingForOperand = false;
  }
  current += num;
  display.value = current;
}

function appendOp(op) {
  if (current === '') return;
  display.value += op;
  current += op;
  waitingForOperand = false;
}

function appendDot() {
  if (!current.includes('.')) {
    current += '.';
    display.value = current;
  }
}

function clearDisplay() {
  current = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(current);
    display.value = result;
    current = result.toString();
    waitingForOperand = true;
  } catch {
    display.value = 'Error';
    current = '';
    waitingForOperand = true;
  }
}