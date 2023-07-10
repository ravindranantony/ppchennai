function generateFibonacci(n) {
    var fibonacciList = [];
  
    // Check if the number of elements is valid
    if (n <= 0) {
      console.log("Please enter a positive integer.");
      return fibonacciList;
    }
  
    // Generate Fibonacci series
    fibonacciList.push(0);
    if (n > 1) {
      fibonacciList.push(1);
  
      for (var i = 2; i < n; i++) {
        var nextElement = fibonacciList[i - 1] + fibonacciList[i - 2];
        fibonacciList.push(nextElement);
      }
    }
  
    return fibonacciList;
  }
  
  // Get the Fibonacci list element
  var fibonacciListElement = document.getElementById("fibonacci-list");
  
  // Generate Fibonacci series with 10 elements
  var fibonacciSeries = generateFibonacci(10);
  
  // Add the Fibonacci series to the list
  for (var i = 0; i < fibonacciSeries.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = fibonacciSeries[i];
    fibonacciListElement.appendChild(listItem);
  }