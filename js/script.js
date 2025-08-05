
const navLinks = document.querySelectorAll('.topnav a');
const sections = document.querySelectorAll('.section');
navLinks.forEach(l => {
    l.addEventListener('click', e =>{
        e.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        l.classList.add('active');
        document.getElementById(l.dataset.target).classList.add('active');
    });
});

const x = 2025;
const y = new Date().getFullYear();
const z = y > x ? `${x} - ${y}` : `${x}`;
document.getElementById('copyright').textContent = `© ${z} Fayad Alhanash`;
