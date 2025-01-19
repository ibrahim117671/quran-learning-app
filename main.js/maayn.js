function toggleAyahs(ayahsId) {
    var ayahs = document.getElementById(ayahsId);
    if (ayahs.style.display === "none" || ayahs.style.display === "") {
        ayahs.style.display = "block"; // Show ayahs
    } else {
        ayahs.style.display = "none"; // Hide ayahs
    }
}

function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}