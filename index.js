// 1.Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.
// (factorial of 5= 5*4*3*2*1=120)
{
  let result1 = calculateFactorial(5);
  function calculateFactorial(n) {
    let multiple = 1;
    for (let i = n; i > 0; i--) {
      multiple = multiple * i;
    }

    return multiple;
  }
  console.log(result1);
}

// // 2.Create an anonymous function that takes an array of numbers as an argument and
// returns the array with each number doubled. Assign this function to a variable called doubleArray.
{
  let doubleArray = function (numbers) {
    let ans = numbers.map(double);

    function double(element) {
      return element * 2;
    }

    return ans;
  };

  let result2 = doubleArray([1, 2, 3, 4]);
  console.log(result2);
}

// 3.Define a function expression factorial that takes one number as a parameter and returns its factorial.
{
  let factorial = function (num) {
    let product = 1;
    for (let i = num; i > 0; i--) {
      product = product * i;
    }
    return product;
  };

  let exp = factorial(5);
  console.log(exp);
}

// 4.Write a function processArray that takes an array and a callback function as parameters.
// The function should apply the callback function to each element of the array and return a new array with the results.
// Use an anonymous function as the callback to double each number in the array.
{
  let final = processArray([1, 2, 3, 4], function (number) {
    return number * 2;
  });
  console.log(final);

  function processArray(array, callback) {
    return array.map(callback);
  }
}
