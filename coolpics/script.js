const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menu = document.querySelector('h4');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

gallery.addEventListener('click', openModal)
menu.addEventListener('click', openMenu)

function openModal(event)
{
    const img = event.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    var width = window.innerWidth;
    console.log(width);
    width = width / 1.8;
    
    modalImage.style.height = width + 'px';
    modalImage.style.width = '90%';
    modalImage.style.maxWidth = '600px';
    modalImage.style.maxHeight = '500px';

    modalImage.style.objectFit = 'cover';
    modalImage.style.margin = '150px auto';
    modalImage.style.border = 'none';

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

function openMenu()
{
    nav.classList.toggle('hide');
    header.classList.toggle('extend');
    console.log('toggle');
    
}