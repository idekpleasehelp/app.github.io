function playaudio(audioName, loop) {
    let audio = new Audio(audioName)
    audio.loop = true
    audio.play()
}
playaudio("audio.wav", true)