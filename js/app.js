const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const overlay = document.querySelector('.overlay');
const btnUpPage = document.querySelector('.back-up');
const loading = document.querySelector('.overlay-loading');
const wrapper = document.querySelector('.wrapper');

// Xử lý hiệu ứng loading khi vào website
window.addEventListener('load', function () {
    loading.style.display = 'none'
    wrapper.style.display = 'block'
})

// Xử lý menu mở ra trên thiết bị mobile
toggle.onclick = function () {
    menu.style.transform = 'translateX(0)'
    overlay.style.visibility = 'visible'
    overlay.style.opacity = '1'
}
document.addEventListener('click', function (event) {
    if(menu.getAttribute('style') && overlay.getAttribute('style')) {
        if (!event.target.closest('.menu') && !event.target.matches('.toggle')) {
            console.log('test')
            menu.removeAttribute('style')
            overlay.removeAttribute('style')
        }
    }
})

// Xử lý lên trên đầu trang web
btnUpPage.onclick = function () {
    scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}


// Xứ lý màu nền darkmode chế độ tối cho trang web
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('class', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
toggleSwitch.addEventListener('change', switchTheme);
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('class', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('class', 'light');
        localStorage.setItem('theme', 'light');
    }
}
