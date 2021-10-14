setTimeout(() => {
    document.getElementById("loadingScreen").style.opacity = "0";
    if (window.chrome) {
        document.getElementsByTagName("body")[0].style.overflowY = "overlay";
    } else {
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }
}, 2000)
setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
}, 2500)