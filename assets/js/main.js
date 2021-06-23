while (true) {
    var element = document.querySelector('body');
    element.requestFullscreen().then(() => {
        document.exitFullscreen();
    });
}