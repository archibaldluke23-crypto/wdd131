const selecter = document.querySelector("#theme-select");
const body = document.querySelector("body");
const content = document.querySelector("#content");
const h3 = document.querySelector('h3');
const image = document.querySelector('img');

selecter.addEventListener('change', ChangeTheme)

function ChangeTheme() {
    let choice = selecter.value;
    if (choice == 'dark'){
        body.classList.add('dark');
        image.setAttribute('src', 'images/byui-logo-dark.png');
        h3.style.color = 'rgb(113, 210, 255)';
    }
    else{
        body.classList.remove('dark');
        image.setAttribute('src', 'images/byui-logo-blue.webp')
        h3.style.color = 'rgb(0, 99, 198)';
    }
}