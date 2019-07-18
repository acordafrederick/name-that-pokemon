

function startTimer() {
    var count = 30;
    console.log(timer);
    var countDown = setInterval(function() {
        console.log(count);
        count--;
        if (count === 0) {
            clearInterval(countDown);
        }
    }, 1000);
}