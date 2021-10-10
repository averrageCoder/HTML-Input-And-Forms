const salary = document.querySelector('#salary');
const salary_output = document.querySelector('.salary-output');
salary_output.textContent = salary.value;
salary.addEventListener('input',function() {
    salary_output.textContent = salary.value;
});

const text = document.querySelector('#text');
const text_error = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        text_error.textContent = "";
    else text_error.textContent = "Name is incorrect!"
})

const email = document.querySelector('#email');
const email_error = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+(\.[a-z]{2})?$');
    if(emailRegex.test(email.value))
        email_error.textContent = "";
    else email_error.textContent = "Email is incorrect!"
})

const tel = document.querySelector('#tel');
const tel_error = document.querySelector('.tel-error');
tel.addEventListener('input', function() {
    let telRegex = RegExp('^([0-9]{2}\\s)?[0-9]{10}$');
    if(telRegex.test(tel.value))
        tel_error.textContent = "";
    else tel_error.textContent = "Telephone is incorrect!"
})

const pwd = document.querySelector('#pwd');
const pwd_error = document.querySelector('.pwd-error');
pwd.addEventListener('input', function() {
    let pwdRegex = RegExp('^.{8,}$');
    if(pwdRegex.test(pwd.value))
        pwd_error.textContent = "";
    else pwd_error.textContent = "pwd is incorrect!"
})
