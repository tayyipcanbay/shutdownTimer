var { kapatWin, iptalWin } = require('./kapatmawin');
var { kapatMac, iptalMac } = require('./kapatmamac');
function kapatma() {

    if (process.platform === "win32") {
        iptalWin();
        kapatWin();
    }
    if (process.platform === "darwin") {
        kapatMac();
    }
}
function iptal() {
    if (process.platform === "win32") {
        iptalWin();
    }
    if (process.platform === "darwin") {
        iptalMac();
    }
}