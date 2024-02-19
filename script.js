// variables
const form = document.querySelector('.links');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const visitor = document.querySelector('.visitor');
const sub = document.querySelector('.sub');
const newsletters =document.querySelector('.follower');
const password = document.querySelector('#newPassword');
const confirmPassword = document.querySelector('#confirm-password');
const signUpForm = document.querySelector('.sign-up-form');
const requirements = document.querySelector('.requirements');
const samePassword = document.querySelector('.same-password');

// addEventListener

form.addEventListener('click', e =>{
    chooseForm(e)
});

password.addEventListener('focus', ()=>{
    requirements.textContent = 'Password must contain at least one lowercase letter, one uppercase letter and one symbol'
})

password.addEventListener('focusout', ()=>{
    requirements.textContent = ''
})

confirmPassword.addEventListener('keyup',e =>{
    confirmation()
})

signUpForm.addEventListener('submit', e =>{
    if(password.value !== confirmPassword.value){
        e.preventDefault();
        wrong();
    }
})

newsletters.addEventListener('click', (e) =>{
    e.preventDefault();
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

function wrong(){
    confirmPassword.focus();
    samePassword.textContent = "Password doesn't match";
    samePassword.style.color = 'red';
}

// password authentication

function confirmation() {
    if(password.value === confirmPassword.value){
        confirmPassword.style.backgroundColor ='lightgreen';
    }
    else{
        confirmPassword.style.backgroundColor ='lightcoral';
    }
}

