const { spawn } = require('node:child_process');
function kapatMac() {
    var sure = document.getElementById("sure").value;
    sure =  Math.round(sure / 60);
    var kapama = spawn('sudo', ['shutdown', '-s', '+' + sure + '']);
}
function iptalMac() {
    var iptal = spawn('sudo', ['killall', 'shutdown']);
}
module.exports = {
    kapatMac, iptalMac
}
