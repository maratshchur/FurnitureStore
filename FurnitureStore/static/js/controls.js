const checkbox = document.getElementById('toggle-styles');
const styleControls = document.getElementById('style-controls');
const fontSizeInput = document.getElementById('font-size');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('background-color');
const body = document.getElementById('body');
const title = document.getElementsByClassName('product-title');
const button =document.getElementsByTagName('button')
const list =document.getElementsByTagName('li')
const a =document.getElementsByTagName('a')
const p = document.getElementsByTagName('p')
// const body = document.body;

checkbox.addEventListener('change', () => {
    styleControls.style.display = checkbox.checked ? 'block' : 'none';
});

fontSizeInput.addEventListener('input', () => {
    body.style.fontSize = fontSizeInput.value + 'px';
for (let i = 0; i < title.length; i++) {
    title[i].style.fontSize = fontSizeInput.value + 'px';
}
for (let i = 0; i < button.length; i++) {
    button[i].style.fontSize = fontSizeInput.value + 'px';
}
for (let i = 0; i < list.length; i++) {
    list[i].style.fontSize = fontSizeInput.value + 'px';
}
for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize = fontSizeInput.value + 'px';
}
for (let i = 0; i < p.length; i++) {
    p[i].style.fontSize = fontSizeInput.value + 'px';
}
});



textColorInput.addEventListener('input', () => {
    body.style.color = textColorInput.value;
});

backgroundColorInput.addEventListener('input', () => {
    main.style.backgroundColor = backgroundColorInput.value;
});