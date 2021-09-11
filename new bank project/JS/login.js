document.getElementById('submit-btn').addEventListener('click', function () {
    // console.log('button-clicked');
    //get user email
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;
    //console.log(userEmail);

    //get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    //console.log(userEmail);

    //cheak email & password
    if (userEmail == 'tahnimmahir@gmail.com' && userPass == '01806') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }


})

