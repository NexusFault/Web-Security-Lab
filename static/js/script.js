const buttons = document.querySelectorAll('.buttons button');
const forms = document.querySelectorAll('.form-container');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        forms.forEach(f => f.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.form).classList.add('active');
    });
});