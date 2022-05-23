function kapatWin() {
    var spawn = require('child_process').spawn;
    var cp = spawn(process.env.comspec, ['/c', 'shutdown', '-s', '-t', '3600']);

    cp.stdout.on("data", function (data) {
        console.log(data.toString());
    });

    cp.stderr.on("data", function (data) {
        console.error(data.toString());
    });
}