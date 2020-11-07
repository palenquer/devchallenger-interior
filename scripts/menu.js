document.querySelector('.menu_open').onclick = function() {
    document.documentElement.classList.add('menu_active');
};
document.querySelector('.menu_close').onclick = function() {
    document.documentElement.classList.remove('menu_active');
};