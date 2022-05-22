const { platform } = require('node:process')
const { spawn } = require('node:child_process');
console.log(platform);
if (platform === "darwin") {
   
} 
function kapatma(sure) {
    var kapama = spawn('sudo', ['shutdown', '-s', '+'+sure+'']);
    console.log(kapama);
 
 }
 function iptalet() {
     var iptal = spawn('sudo', ['killall', 'shutdown']);
     console.log(iptal);

 }

