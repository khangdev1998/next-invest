const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const overlay = document.querySelector('.overlay');
const btnUpPage= document.querySelector('.back-up');

toggle.onclick = function () {
    menu.classList.toggle('active')
    overlay.classList.toggle('active')
}
document.addEventListener('click', function (event) {
    if(menu.classList.contains('active')) {
        if (!event.target.closest('.menu') && !event.target.matches('.toggle')) {
            menu.classList.remove('active')
            overlay.classList.remove('active')
        }
    }
})

btnUpPage.onclick = function() {
    scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}