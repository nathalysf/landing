var statSend = false;
function checkSubmit() {
    if (!statSend) {
        statSend = true;
        return true;
    } else {
        alert("Tu correo se esta enviando!");
        return false;
    }
}