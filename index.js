
window.addEventListener('keydown', (e) => {
    let audio = document.querySelector(`audio[date-key = '${e.key}']`)

    let keypress = document.querySelector(`.tune[date-key = '${e.key}']`)
    keypress.classList.add("playing")

   
    audio.currentTime = 0; //for continue playing
    audio.play();

    setTimeout(() => {
        keypress.classList.remove("playing")  
    }, 100);
})