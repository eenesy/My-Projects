const main = document.getElementById('main');
const registerBtn = document.getElementById('Register');
const loginBtn = document.getElementById('Login');

registerBtn.addEventListener('click', () => {
    main.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    main.classList.remove("active");
});