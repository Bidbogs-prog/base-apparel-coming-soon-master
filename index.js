const submit = document.querySelector('.btn');
const inputText = document.querySelector('input')
const feedback = document.querySelector('.feedback')
const error = document.querySelector('.error')
const pattern = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
const emailPattern = pattern

submit.addEventListener('click', e =>{
    e.preventDefault();
    const email = inputText.value

    if (emailPattern.test(email)){
        feedback.style.display = 'none'
        error.style.display = 'none'
    } else{
        feedback.style.display = 'block'
        error.style.display = 'block'

    }

}
)