const { platform } = require('node:process')
const { spawn } = require('node:child_process');
console.log(platform);
function kapatMac() {
    var sure = document.getElementById("sure").value;
    var kapama = spawn('sudo', ['shutdown', '-s', '+' + sure + '']);
    console.log(kapama);

}
function iptalMac() {
    var iptal = spawn('sudo', ['killall', 'shutdown']);
    console.log(iptal);

}

