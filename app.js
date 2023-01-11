var finalNumber = 0;
var slider = document.getElementById("my-range");
var output = document.getElementById("my-range-output");
var numberConfirmedQ = "false";
var currentNumberDisplay = document.getElementById("current-number");
var smallerOrLarger = document.getElementById("smaller-larger");
output.innerHTML = slider.value;

function startGame() {
    var maxNumber = slider.value++;
    console.log("max number:  ", maxNumber);
    var sliderContainer = document.getElementById("slider-container");
    sliderContainer.style.display = "none";
    finalNumber =  Math.random() * (maxNumber - 1) + 1;
    finalNumber = Math.round(finalNumber);
    //console.log("final number:  ", finalNumber);
    numberConfirmedQ = "true";
}

function guessNumber() {
    if (numberConfirmedQ == "true"){
        var inputVal = document.getElementById("number-input-field").value;
        console.log(inputVal);
    } else {alert("Please confirm a number to start the game")}

    currentNumberDisplay.innerHTML = inputVal
    if (inputVal == finalNumber){console.log("number guessed correctly"), smallerOrLarger.innerHTML = "correct"}
    if (inputVal > finalNumber){console.log("number too big"), smallerOrLarger.innerHTML = "too big"}
    if (inputVal < finalNumber){console.log("number too small"), smallerOrLarger.innerHTML = "too small"}
}

slider.oninput = function() {
    console.log("slider was detected   ", slider.value);
    output.innerHTML = this.value;
} 