const form = document.querySelector('.input');
const input = document.querySelector('#input');
// console.log(input);
const password = document.querySelector('#password');
input.addEventListener('input', (e) => {
    const inputValue = e.target.value; // Trim whitespace from input value

    if (inputValue.includes(' ')) {
        document.querySelector('.username').innerText = 'Please enter a valid username';
    } else {
        document.querySelector('.username').innerText = ''; // Clear error message if input is valid
    }
});
password.addEventListener('input', (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 6) {
        document.querySelector('.pass').innerText = 'Password must be greater than 6 characters';
    } else if (inputValue.includes(' ')) {
        document.querySelector('.pass').innerText = 'Password cannot contain spaces';
    } else {
        document.querySelector('.pass').innerText = ''; // Clear error message if input is valid
    }
});