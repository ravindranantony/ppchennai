function fibonacciSeries(n) {
    var fibSeries = [];
    if (n >= 1) {
      fibSeries.push(0);
    }
    if (n >= 2) {
      fibSeries.push(1);
    }
  
    for (var i = 2; i < n; i++) {
      var nextNum = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries.push(nextNum);
    }
  
    return fibSeries;
  }
  
  function printFibonacciSeries(n) {
    var fibSeries = fibonacciSeries(n);
    for (var i = 0; i < fibSeries.length; i++) {
      if (i === 0) {
        console.log("Action: Start with 0");
      } else if (i === 1) {
        console.log("Action: Continue with 1");
      } else {
        console.log(
          "Action: Add previous two numbers " +
            fibSeries[i - 1] +
            " and " +
            fibSeries[i - 2]
        );
      }
      console.log("Number: " + fibSeries[i]);
    }
  }
  
  var n = 10; // Generate Fibonacci series up to the 10th number
  printFibonacciSeries(n);
  