document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            const parent = this.parentElement;
            const siblings = parent.querySelectorAll('.payment-option');
            
            siblings.forEach(s => {
                s.classList.remove('active');
                const radio = s.querySelector('input[type="radio"]');
                if (radio) radio.checked = false;
            });
            
            this.classList.add('active');
            const radio = this.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });

    const addressCards = document.querySelectorAll('.address-card');
    addressCards.forEach(card => {
        card.addEventListener('click', function() {
            const parent = this.parentElement;
            const siblings = parent.querySelectorAll('.address-card');
            
            siblings.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    const genderOptions = document.querySelectorAll('.gender-option');
    genderOptions.forEach(option => {
        option.addEventListener('click', function() {
            const parent = this.parentElement;
            const siblings = parent.querySelectorAll('.gender-option');
            
            siblings.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});