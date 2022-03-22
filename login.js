document.getElementById('login-submit').addEventListener('click', function () {
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;


    // get password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if (userEmail == 'foysal@gmail.com' && userPassword == '123456') {
        window.location.href = 'banking.html';
    }
})