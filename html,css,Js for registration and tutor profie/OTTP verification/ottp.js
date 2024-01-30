const inputs = document.querySelectorAll('.otp-code');
const form = document.querySelector('.otp-code-container');
inputs.forEach((input) => {
    input.addEventListener('keyup', function() {
            if (this.nextElementSibling) {
                this.nextElementSibling.focus();
            } else {
                form.submit();
            }
    });
});