let form = document.forms.reg;
let inputs = form.querySelectorAll('input');
let needInps = document.querySelectorAll('.required');
let error_view = document.querySelector('.error');
let success_view = document.querySelector('.success');
let all_view = document.querySelector('.all');
let need_view = document.querySelector('.need');

all_view.innerHTML = `All: ${inputs.length}`;
need_view.innerHTML = `Need: ${needInps.length}`;

form.onsubmit = (event) => {
    event.preventDefault();
    let error = 0;

    needInps.forEach(lbl => {
        let inp = lbl.querySelector('input');
        lbl.classList.remove('invalid');

        if (inp.value.length === 0) {
            lbl.classList.add('invalid');
            error++;
        }
    });

    error_view.innerHTML = `Error: ${error}`;
    success_view.innerHTML = `Success: ${needInps.length - error}`;

    let nameReg = /^[a-zA-Z ,.'-]+$/;
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    inputs[0].onkeyup = (e) => {
        let inputValue = e.target.value.trim();
        let isValid = nameReg.test(inputValue);

        if (!isValid) {
            inputs[0].parentElement.classList.add('invalid');
        } else {
            inputs[0].parentElement.classList.remove('invalid');
        }
    };

    inputs[1].onkeyup = (e) => {
        let inputValue = e.target.value.trim();
        let isValid = emailReg.test(inputValue);

        if (!isValid) {
            inputs[1].parentElement.classList.add('invalid');
        } else {
            inputs[1].parentElement.classList.remove('invalid');
        }
    };

    if (error === 0) {
        submit();
    }
};

function submit() {
    let user = {};
    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

    console.log(user);
}