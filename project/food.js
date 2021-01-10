document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('show');
    document.querySelector('.left').classList.toggle('show');
});
document.addEventListener('click', () => {
    //    document.querySelector('.main-menu').classList.remove('show');
})