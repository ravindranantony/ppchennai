function generateFibonacciSeries() {
    var limit = parseInt(prompt("Enter the number of terms in the Fibonacci series:"));
    var series = [0, 1]; // Initialize the series with the first two terms

    for (var i = 2; i < limit; i++) {
        var next = series[i - 1] + series[i - 2];
        series.push(next);
    }

    var result = series.join(", ");
    document.getElementById("result").innerHTML = "Fibonacci Series: " + result;
}