// Create a function that will receive 2 string “+ 1 2 34.6 55 6 7”
// The first char is alway the operation that will be executed y the rest of the numbers.
// It will return a string “Total: 105.60”

function calculator2(operator, operands) {
  let arr = operands.split(' ');

  let total = +arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = +arr[i];
    switch (operator) {
      case "+":
        total += num;
        break;
      case "-":
        total -= num;
        break;
      case "*":
        total *= num;
        break;
      case "/":
        total /= num;
        break;
      default:
        break;
    }
  }

  return "Total: " + total.toFixed(2);
}

function calculator1(input) {
  let arr = input.split(' ');

  let operator = arr[0];
  let total = +arr[1];

  for (let i = 2; i < arr.length; i++) {
    const num = +arr[i];
    switch (operator) {
      case "+":
        total += num;
        break;
      case "-":
        total -= num;
        break;
      case "*":
        total *= num;
        break;
      case "/":
        total /= num;
        break;
      default:
        break;
    }
  }

  return "Total: " + total.toFixed(2);
}

test('2 arguments', () => {
  expect(calculator2("+", "1 2 3 4 67.8")).toBe("Total: 77.80")
  expect(calculator2("*", "2 3 4")).toBe("Total: 24.00")
})

test('1 argument', () => {
  expect(calculator1("+ 1 2 3 4 67.8")).toBe("Total: 77.80")
  expect(calculator1("* 2 3 4")).toBe("Total: 24.00")
})