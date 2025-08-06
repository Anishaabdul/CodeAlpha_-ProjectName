const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
