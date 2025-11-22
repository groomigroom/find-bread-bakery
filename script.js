let count = 0;

setInterval(function () {
    count++;
    if (count > 4) {
        count = 0;
    }

    const train = document.querySelector(".sharpfindbreadtrain");
    if (train) {
        train.style.transform = `translateX(${-330 * count}px)`;
    }
}, 2500);
