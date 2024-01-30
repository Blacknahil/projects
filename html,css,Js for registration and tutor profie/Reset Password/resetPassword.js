document.querySelector(".reset-password-form").addEventListener("submit", function(event) {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
    }
});
