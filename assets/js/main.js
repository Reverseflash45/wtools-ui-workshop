document.addEventListener('DOMContentLoaded', function() {
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname.split('/').pop();

    bottomNavItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (currentPath === itemHref && currentPath !== '') {
            bottomNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }
    });

    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(btn => {
        if (!btn.getAttribute('href')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.history.back();
            });
        }
    });
});