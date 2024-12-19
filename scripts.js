let display = document.getElementById("display");
let historyTable = document
  .getElementById("history-table")
  .getElementsByTagName("tbody")[0];

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function addNumber(number) {
  display.value += number;
}

function addOperation(operation) {
  if (display.value && !isNaN(display.value.slice(-1))) {
    display.value += operation;
  }
}

function calculateResult() {
  try {
    const result = eval(display.value);
    addToHistory(display.value, result);
    display.value = result;
  } catch (e) {
    display.value = "Erro";
    setTimeout(() => (display.value = ""), 1500);
  }
}

function addToHistory(expression, result) {
  const row = historyTable.insertRow();
  const expressionCell = row.insertCell(0);
  const resultCell = row.insertCell(1);

  expressionCell.textContent = expression;
  resultCell.textContent = result;

  row.onclick = () => {
    display.value = expression;
  };
}
