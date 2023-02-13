let btn = document.querySelector('.switch-member');
const sticky = btn.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY <= 150) {
            btn.classList.add('sticky');
        } else {
            btn.classList.remove('sticky');
        }
    })
