document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const siblings = parent.querySelectorAll('.tab-item');
            siblings.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.innerText === '♡') {
                this.innerText = '♥';
                this.style.color = '#E60000';
            } else {
                this.innerText = '♡';
                this.style.color = 'white';
            }
        });
    });

    const cartQtyBtns = document.querySelectorAll('.cart-qty-btn');
    cartQtyBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const span = this.parentElement.querySelector('span');
            let qty = parseInt(span.innerText);
            if (this.innerText === '+') {
                qty++;
            } else if (this.innerText === '-' && qty > 1) {
                qty--;
            }
            span.innerText = qty;
        });
    });
});