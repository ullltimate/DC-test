const form = document.querySelector('.contacts-form');
const btnSubmit = document.querySelector('.contacts-form__button');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMassage = document.getElementById('massage');
const errName = document.querySelector('.text-field__error-name');
const errEmail = document.querySelector('.text-field__error-email');

async function validationForm(){
    const regName = /^[а-яёa-z]+$/iu;
    const regEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    let validName = regName.test(inputName.value);
    let validEmail = regEmail.test(inputEmail.value);
    validName ? (errName.style.display = 'none') : (errName.style.display = 'block');
    validEmail ? (errEmail.style.display = 'none') : (errEmail.style.display = 'block');
    if (validName && validEmail) {
        let status = await submitForm();
        if (status) {
            const originalText = btnSubmit.innerText;
            btnSubmit.innerText = 'Отправленно!';
            setTimeout(() => {
                btnSubmit.innerText = originalText;
            }, 1000);
            inputEmail.value = '';
            inputName.value = '';
        };
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validationForm();
})

async function submitForm() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: `${inputName.value}`,
                  body: `${inputEmail.value}`,
                  userId: 1,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            });
        const result = await response.json();
        console.log(result);
        return response.ok;
    } catch (e) {
        console.log(e);
    }
}