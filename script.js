// input meme

const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('imagen-editor');

urlInput.addEventListener('input', (e) => changebackground (e));

const changebackground = (e) => {
    memeImg.style.backgroundImage = `url('${e.target.value}')`
}