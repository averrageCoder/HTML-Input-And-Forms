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
