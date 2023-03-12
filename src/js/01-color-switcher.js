const ref = {
  body: document.querySelector('body'),
  btnStrt: document.querySelector('button[data-start]'),
  btnStp: document.querySelector('button[data-stop]'),
};

ref.btnStrt.addEventListener('click', onClickStrt);
ref.btnStp.addEventListener('click', onClickStp);

function onClickStrt() {
  interval = setInterval(() => {
    ref.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  ref.btnStrt.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStp() {
  if (interval) {
    clearInterval(interval);
  }
  ref.btnStrt.disabled = false;
  ref.body.style.backgroundColor = '#FFFFFF';
}
