document.addEventListener("DOMContentLoaded", () => {
    validateTextInput();
});

function validateTextInput() {
    document.getElementById('input-text-encript').addEventListener('input', function (event) {
        const input = event.target;
        let texto = input.value;
        
        // Only allows lowercase letters and spaces
        const regex = /^[a-z\s]*$/;
        if (!regex.test(texto)) {
            input.value = texto.replace(/[^a-z\s]/g, '');
        }
    });
}
