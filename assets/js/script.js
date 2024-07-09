document.addEventListener("DOMContentLoaded", () => {
    validateTextInput();

    let btnEncript = document.getElementById('btn-encript');
    btnEncript.addEventListener('click', encriptText);

    let btnDesencript = document.getElementById('btn-desencript');
    btnDesencript.addEventListener('click', desencriptText);
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

function encriptText() {
    const inputTextarea = document.getElementById('input-text-encript');
    let text = inputTextarea.value;

    let boxOutput = document.getElementById('text-encript');
    let boxSleep = document.getElementById('sleep-encript');

    if(text.trim() == "") {
        boxOutput.classList.add('hidden');
        boxOutput.classList.remove('show');
        boxSleep.classList.add('show');
        boxSleep.classList.remove('hidden');

        setTimeout(() => {
            boxOutput.classList.add('d-none');
            boxSleep.classList.remove('d-none');
        }, 500);
        return;
    }
            
    // Encript text
    const encriptaciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    
    let textEncript = text.replace(/[eioua]/g, (match) => encriptaciones[match]);
    
    // Inject the encrypted text into the element with id 'output-text-desencript'
    const outputDiv = document.getElementById('output-text-desencript');
    outputDiv.innerHTML = `<p>${textEncript}</p>`;

    boxOutput.classList.remove('hidden');
    boxOutput.classList.add('show');
    boxSleep.classList.remove('show');
    boxSleep.classList.add('hidden');

    setTimeout(() => {
        boxOutput.classList.remove('d-none');
        boxSleep.classList.add('d-none');
    }, 500);
}

function desencriptText() {
    const inputTextarea = document.getElementById('input-text-encript');
    let text = inputTextarea.value;

    let boxOutput = document.getElementById('text-encript');
    let boxSleep = document.getElementById('sleep-encript');

    if(text.trim() == "") {
        boxOutput.classList.add('hidden');
        boxOutput.classList.remove('show');
        boxSleep.classList.add('show');
        boxSleep.classList.remove('hidden');

        setTimeout(() => {
            boxOutput.classList.add('d-none');
            boxSleep.classList.remove('d-none');
        }, 500);
        return;
    }
            
    // Decrypt the text
    const desencriptaciones = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    
    let textDesencript = text;
    for (const [key, value] of Object.entries(desencriptaciones)) {
        const regex = new RegExp(key, 'g');
        textDesencript = textDesencript.replace(regex, value);
    }
    
    // Inject the decrypted text into the element with id 'output-text-desencript'
    const outputDiv = document.getElementById('output-text-desencript');
    outputDiv.innerHTML = `<p>${textDesencript}</p>`;

    boxOutput.classList.remove('hidden');
    boxOutput.classList.add('show');
    boxSleep.classList.remove('show');
    boxSleep.classList.add('hidden');

    setTimeout(() => {
        boxOutput.classList.remove('d-none');
        boxSleep.classList.add('d-none');
    }, 500);
}