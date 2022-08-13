// Navbar decoration
const collapseItem = document.querySelector('.collapse');
const tabName = document.querySelector('#tabName');
const mainNavbar = document.querySelector('#mainNavbar')
// const navItem = document.querySelectorAll('.nav-item');
collapseItem.addEventListener('show.bs.collapse', () => {
    tabName.style.display = 'none';
    mainNavbar.style.border = '1px solid #383838';
})
collapseItem.addEventListener('hidden.bs.collapse', () => {
    tabName.style.display = 'flex';
    mainNavbar.style.border = 'none';
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
        tabName.style.display = 'none';
        // mainNavbar.style.border = 'none';
    } else {
        tabName.style.display = 'flex';
    }
})

// opposition
const oppoTitle = document.querySelector('#oppoTitle.h1');
const oppoTitleW = parseInt(oppoTitle.style.width);
oppoTitle.style.height = Math.round(oppoTitleW / 210.2 * 118.25).toString();