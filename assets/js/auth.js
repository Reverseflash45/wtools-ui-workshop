function checkAdminSession() {
    if (localStorage.getItem('wtools_role') !== 'admin') {
        window.location.href = 'auth-error.html';
    }
}

function checkUserSession() {
    if (!localStorage.getItem('wtools_role')) {
        window.location.href = 'login.html';
    }
}

function executeLogout() {
    localStorage.removeItem('wtools_role');
    localStorage.removeItem('wtools_email');
    window.location.href = 'login.html';
}