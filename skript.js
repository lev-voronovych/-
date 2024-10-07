let startTime;
let morseCode = '';
const morseAlphabet = {
     '.-': 'А', '-...': 'Б', '.--': 'В', '--.': 'Г', '.--.': 'Ґ', '-..': 'Д', '.': 'Е', 
    '..-..': 'Є', '...-': 'Ж', '--..': 'З', '..': 'И', '..': 'І', '.-..-': 'Ї', '.---': 'Й', 
    '-.-': 'К', '.-..': 'Л', '--': 'М', '-.': 'Н', '---': 'О', '.--.': 'П', '.-.': 'Р', 
    '...': 'С', '-': 'Т', '..-': 'У', '..-.': 'Ф', '....': 'Х', '-.-.': 'Ц', '---.': 'Ч', 
    '----': 'Ш', '--.-': 'Щ', '-..-': 'Ь', '..--': 'Ю', '.--..': 'Я'
};

let isInputActive = false; // Track if input is active

function startInput() {
    startTime = new Date().getTime();
    isInputActive = true; // Mark input as active
}

function endInput() {
    if (!isInputActive) return; // Prevent multiple triggers

    const endTime = new Date().getTime();
    const duration = endTime - startTime;

    if (duration < 200) {
        morseCode += '.'; // Коротке натискання - крапка
    } else {
        morseCode += '-'; // Довге натискання - тире
    }

    document.getElementById('morseCodeInput').value = morseCode;
    isInputActive = false; // Reset the input state
}

// Додаємо пробіл для розділення символів
function addSpace() {
    morseCode += ' '; // Додаємо пробіл
    document.getElementById('morseCodeInput').value = morseCode;
}
function deleteLastChar() {
    morseCode = morseCode.slice(0, -1); // Видаляємо останній символ
    document.getElementById('morseCodeInput').value = morseCode; // Оновлюємо відображення
}
// Додаємо тире
function addHyphen() {
    morseCode += '-'; // Додаємо тире
    document.getElementById('morseCodeInput').value = morseCode;
}

// Розшифровуємо код Морзе
function decodeMorseCode() {
    const decodedText = morseCode.trim().split(' ').map(code => morseAlphabet[code] || '').join('');
    document.getElementById('decodedText').value = decodedText;
    morseCode = '';  // Очищаємо код після розшифровки
    document.getElementById('morseCodeInput').value = morseCode; // Очищаємо поле коду Морзе
}

// Додаємо події для пробілу
document.body.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Запобігаємо стандартній поведінці пробілу
        addSpace();
    }
});

// Додаємо підтримку для сенсорних екранів
const morseButton = document.getElementById('morseButton');
morseButton.addEventListener('touchstart', startInput);
morseButton.addEventListener('touchend', endInput);
