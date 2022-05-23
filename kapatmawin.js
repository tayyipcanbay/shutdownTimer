var spawn = require('child_process').spawn;
function kapatWin() {
    var sure = document.getElementById("sure").value;
    var cp = spawn(process.env.comspec, ['/c', 'shutdown', '-s', '-t', sure]);

    cp.stdout.on("data", function (data) {
        console.log(data.toString());
    });

    cp.stderr.on("data", function (data) {
        console.error(data.toString());
    });
}
function iptalWin() {
    var cp = spawn(process.env.comspec, ['/c', 'shutdown', '-a']);

    cp.stdout.on("data", function (data) {
        console.log(data.toString());
    });

    cp.stderr.on("data", function (data) {
        console.error(data.toString());
    });
}
module.exports = {
    kapatWin, iptalWin
}