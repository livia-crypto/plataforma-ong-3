const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main > section, main > article');

links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault(); // Evita recarregar a página
        const href = this.getAttribute('href').replace('.html', '');

        sections.forEach(sec => sec.style.display = 'none'); // Esconde todas
        const target = document.getElementById(href);
        if(target) target.style.display = 'block';
    });
});
