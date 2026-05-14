document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.group1 .free, .Pro, .box1, .people, .bicaus');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 100);
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
    });
    const items = document.querySelectorAll('.plusp, .plusp2, .logos');
    items.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, i * 80);
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.4s ease';
    });
});
const btns = document.querySelectorAll('.WE1_bo, .req, .sign, .pokupka, .pokupka2');
btns.forEach(btn => {
    btn.onmouseenter = () => {
        btn.style.transform = 'scale(1.02)';
        btn.style.backgroundColor = '#3a9e7c';
    };
    btn.onmouseleave = () => {
        btn.style.transform = 'scale(1)';
        btn.style.backgroundColor = '#54BD95';
    };
});
const boxCards = document.querySelectorAll('.box1, .free, .Pro');
boxCards.forEach(card => {
    card.onmouseenter = () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    };
    card.onmouseleave = () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    };
});

const menu = document.querySelectorAll('.menu_text, .login');
menu.forEach(item => {
    item.onmouseenter = () => item.style.color = '#54BD95';
    item.onmouseleave = () => item.style.color = '#A6A6A6';
});

const logos = document.querySelectorAll('.logos');
logos.forEach(logo => {
    logo.onmouseenter = () => {
        logo.style.transform = 'translateY(-3px)';
        const text = logo.querySelector('.logo_t');
        if (text) text.style.color = '#54BD95';
    };
    logo.onmouseleave = () => {
        logo.style.transform = 'translateY(0)';
        const text = logo.querySelector('.logo_t');
        if (text) text.style.color = '#A6A6A6';
    };
});

const arrow = document.querySelector('.strelka');
if (arrow) {
    arrow.onmouseenter = () => {
        arrow.style.transform = 'translateX(3px)';
        arrow.style.backgroundColor = '#3a9e7c';
    };
    arrow.onmouseleave = () => {
        arrow.style.transform = 'translateX(0)';
        arrow.style.backgroundColor = '#54BD95';
    };
}