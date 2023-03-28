//Time
setInterval(tick, 1000);

function tick()
{
    var timeview = document.getElementById("time");
    var d = new Date();
    timeview.innerHTML = d.toLocaleTimeString();
}