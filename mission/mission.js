const selecter = document.querySelector("#theme-select");
const body = document.querySelector("body");
const content = document.querySelector("#content");
const h3 = document.querySelector('h3');
const image = document.querySelector('img');

selecter.addEventListener('change', ChangeTheme)

function ChangeTheme() {
    let choice = selecter.value;

    if (choice == 'dark'){
        body.style.backgroundColor = 'black';
        content.style.color = 'white';

        image.setAttribute('src', 'images/byui-logo-dark.png')
    }
    else{
        body.style.backgroundColor = 'white';
        content.style.color = 'black';
        
        image.setAttribute('src', 'images/byui-logo-blue.webp')
    }
    h3.style.color = rgb(0, 101, 202);

}