let btnLeft = document.querySelector('.btn-left');
let aside = document.querySelector('.left-panel');
let containerDiv = document.querySelector('.container');

btnLeft.onclick = function () {
    aside.classList.toggle('left-panel-close');
    this.classList.toggle('btn-out');
    this.classList.toggle('btn-hrest');
    containerDiv.classList.toggle('container-left');
}
