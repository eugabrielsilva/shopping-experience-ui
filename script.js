const container = document.querySelector('section.experience');
document.querySelectorAll('#btnBad, #btnNotBad, #btnGood').forEach((btn) => {
    btn.addEventListener('click', () => container.className = 'experience ' + btn.id.replace('btn', '').toLowerCase());
});

const form = document.querySelector('#form');
form.addEventListener('focusin', () => container.classList.add('form-open'));
form.addEventListener('focusout', () => container.classList.remove('form-open'));