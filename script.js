button.onclick = e => {
    wrapper.innerHTML = "<img src=dear-sara.png>";
    play();
}

function play() {
    const audio = new Audio();
    const source = document.createElement("source");
    source.src = "Saras_Song.mp3";
    audio.appendChild(source);
    audio.play();
}
