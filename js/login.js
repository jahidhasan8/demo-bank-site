
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('button clicked');
    // get user input
    const inputField = document.getElementById('input-field');
    const email = inputField.value;

    //   get user password
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    //  verify email and password 
    if(email==='jahid@narnia.com' && password==='1234'){
        window.location.href="narnia-bank-inside.html"
    }
    else{
        alert('Please provide correce email and password');
    }
      
})