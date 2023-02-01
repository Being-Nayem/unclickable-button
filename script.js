const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth-buttonWidth;
const maxHeight = window.innerHeight-buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button2 = document.getElementById('Yes');
    button2.addEventListener('click', () => alert('Thank u, love u.. see you at the coffee shop'))
    const button = document.getElementById('No');
    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random()*(maxWidth+1))+'px';
        button.style.top = Math.floor(Math.random()*(maxHeight+1))+'px';
    })
})
