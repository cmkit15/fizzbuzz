// Tenary function for calculating Fizz Buzz
function fizzBuzzTernary(num1, num2) {
    let returnArray = [];
    for (i = 1; i <= 100; i++) {
        returnArray[i] = ((i % num1 == 0 ? "<span class='limegreen'>Fizz</span>" : '') + (i % num2 == 0 ? "<span class='orange'>Buzz</span>"  : '') || i);
    }
    return returnArray;
}

// Template output fuction
document.getElementById('submit').addEventListener('click', function () {
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    document.getElementById('numbers').innerHTML = "Your numbers are<br>" + num1 + " and " + num2 + "<br>";

    output = fizzBuzzTernary(num1, num2);
    for (i = 1; i < output.length; i += 5) {
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
                                   .replace('{{val2}}', output[i + 1])
                                   .replace('{{val3}}', output[i + 2])
                                   .replace('{{val4}}', output[i + 3])
                                   .replace('{{val5}}', output[i + 4])
    }
    document.getElementById('fizzBuzzResults').innerHTML = resultsHTML;
})

// Function to clear input
function reset() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('numbers').innerHTML = "";
    document.getElementById('fizzBuzzResults').innerHTML = "";
}