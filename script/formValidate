const form = document.querySelector('form');
const uName = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');

form.addEventListener('change', (e) => {
    e.preventDefault(); // forhindre at formen sender data til serveren

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const nameValue = uName.value.trim();
    const emailValue = email.value.trim();
    const textareaValue = textarea.value.trim();

    if(nameValue === '') {
        setError(uName, 'Navn må ikke være tomt');
    } else {
        setSuccess(uName);
    }

    if(emailValue === '') {
        setError(email, 'Email må ikke være tomt');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email er ikke gyldig');
    } else {
        setSuccess(email);
    }

    if(textareaValue === '') {
        setError(textarea, 'Besked må ikke være tomt');
    } else {
        setSuccess(textarea);
    }
    
};