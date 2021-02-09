// Function for calculating Fizz Buzz
function fizzBuzz(num1, num2) {
    // Sets result as an empty string
    let result = "";
    // Loops through 1 - 100
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 == 0) {
            result += "<span class='deepskyblue'>FIZZ</span>" + "<span class='deepskyblue'>BUZZ</span> ";
        } else if (i % num1 == 0) {
            result += "<span class='limegreen'>Fizz</span> ";
        } else if (i % num2 == 0) {
            result += "<span class='orange'>Buzz</span> ";
        } else {
            result += i + " ";
        }
    }
    return result;
}

// Event listener for submit button
document.getElementById('submit').addEventListener('click', function () {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let errorMessage = "Please enter two numbers between 1 & 100";
    if (isNaN(num1) || num1 < 1 || num1 > 100 || isNaN(num2) || num2 < 1 || num2 > 100) {
        document.getElementById('errorMessage').innerHTML = errorMessage;
        document.getElementById('numbers').innerHTML = "";
        document.getElementById('results').innerHTML = "";
    } else {
        reset();
        fizzBuzz();
        document.getElementById('numbers').innerHTML = "Your numbers are<br>" + num1 + " and " + num2 + "<br>";
        document.getElementById('results').innerHTML = fizzBuzz(num1, num2);
    }
});

// Function to clear input
function reset() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('numbers').innerHTML = "";
    document.getElementById('results').innerHTML = "";
}