function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function join(strA, strB) {
  return strA + ' AND ' + strB;
}
