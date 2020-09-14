import Stack from "./Stack";

export default (decNumber: number, base: number) => {
  const stack = new Stack();
  const digits = "0123456879ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let result = "";
  let rem: number;
  if (base < 2 || base > 36) return "";
  while (number > 0) {
    rem = Math.floor(number % base);
    stack.push(rem);
    number = Math.floor(number / base);
  }
  while (!stack.isEmpty()) {
    result = digits[stack.pop()] + result;
  }

  console.log("result", result);
  return result;
};
