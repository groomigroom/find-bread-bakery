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

function showPage(page_for_show) {
    document.querySelectorAll('.page_select').forEach(function (pa) {
        pa.style.display = 'none';
        document.getElementById(page_for_show).style.display = 'block';
    });
}
