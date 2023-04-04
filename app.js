//Time
setInterval(tick, 1000);

function tick()
{
    var timeview = document.getElementById("time");
    var t = new Date();
    timeview.innerHTML = t.toLocaleTimeString();
    day();
}

function day() {
    var d = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
    document.getElementById("day").innerHTML = d;

}