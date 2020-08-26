var submitCT = document.getElementById("#Calculate Tip");
var totalInput = document.getElementById("#Total");
var tipInput = document.getElementById("Tip Percentage");
var submissionResponseEl = document.querySelector("#response");

submitCT.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(totalInput.value);
    var price = parseFloat(totalInput);
    console.log(tipInput.value);
    var tipPercentage = parseFloat(tipInput);
    console.log(price * tipPercentage)

    var tipAmount = price * tipPercentage
    var newTotal =
    var response = "Thank you for your submission " + totalInput.value + "! We will reach out to you at " + tipInput.value + ".";
  submissionResponseEl.textContent = response;
});  