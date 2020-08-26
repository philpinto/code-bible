var count = 0;

var incrementBtn = document.getElementById("Increment").addEventListener("click", function () {
    count++;
    console.log(count);
    countelem.textcontent = count;
});

var decrementBtn = document.getElementById("decrement")
decremenetBtn.addEventListener("click", function () {
    if (count <=0) {
        count = 0;
    } else {
        count--;
    }
    console.log(count);
    countelem.textcontent = count;
});
