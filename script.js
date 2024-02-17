// variables
const form = document.querySelector('.links');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const visitor = document.querySelector('.visitor');
const sub = document.querySelector('.sub');
const newsletters =document.querySelector('.follower');
const password = document.querySelector('#newPassword');
const confirmPassword = document.querySelector('#confirm-password');

// addEventListener

form.addEventListener('click', e =>{
    chooseForm(e)
});

newsletters.addEventListener('click', (e) =>{
    e.preventDefault();
})

confirmPassword.addEventListener('keyup',e =>{
    confirmation()
})



// functions
function chooseForm(sign){
    switch (sign.target.textContent) {
        case 'Sign In |':
            signIn.classList.remove('hide');
            sub.classList.remove('hide'); 

            visitor.classList.add('hide');
            signUp.classList.add('hide');
            break;
        case 'Sign Up |':
            signUp.classList.remove('hide');
            sub.classList.remove('hide');

            signIn.classList.add('hide');
            visitor.classList.add('hide');
            break;
        case 'Visitor':
            visitor.classList.remove('hide');
            sub.classList.remove('hide');

            signIn.classList.add('hide');
            signUp.classList.add('hide');
            break;
    }
}


// password authentication

function confirmation() {
    if(password.value === confirmPassword.value){
        confirmPassword.style.backgroundColor ='green';
        console.log('ok');
    }
    else{
        confirmPassword.style.backgroundColor ='red';
        console.log('not ok');
    }
}


