// square(n)Sum

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}