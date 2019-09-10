// Evaluate Reverse Polish Notation
// Source: https://leetcode.com/problems/evaluate-reverse-polish-notation/

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
//
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
//
// Note:
//
// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
// Example 1:
//
// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

const isNumeric = x => {
  return parseInt(x).toString() === x.toString();
};

const evalExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return 0;
  }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
  const stack = [];

  tokens.forEach(token => {
    if (isNumeric(token)) {
      stack.push(parseFloat(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = evalExpression(operand1, operand2, token);
      stack.push(parseInt(result));
    }
  });
  if (stack.length > 1) {
    throw new Error("Invalid RPN expression");
  }
  return stack.pop();
};

const testData = [
  {
    input: ["2", "1", "+", "3", "*"],
    output: 9
  },
  {
    input: ["4", "13", "5", "/", "+"],
    output: 6
  },
  {
    input: [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+"
    ],
    output: 22
  }
];

testData.forEach(testCase => {
  const result = evalRPN(testCase.input);

  console.log(
    `evalRPN([${testCase.input}]) =>`,
    result,
    "| Test Pass: ",
    result === testCase.output
  );
});
