fetch('https://raw.githubusercontent.com/GSRHackZ/Brainly-LockPick/main/lockPick.js')
    .then(function (response) {
    if (!response.ok) {
        return false;
    }
    return response.blob();
})
    .then(function (myBlob) {
    const objectURL = URL.createObjectURL(myBlob);
    const sc = document.createElement("script");
    sc.setAttribute("src", objectURL);
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
});
setTimeout(function () {location.reload()},500);
