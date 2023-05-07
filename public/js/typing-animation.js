const print = (char, secs) => {
    setTimeout(() => {
        document.querySelector('#typing-animation').innerText += char;
    }, secs);
}

const clear = () => {
    document.querySelector('#typing-animation').innerText = "";
}

const type = () => {
    print('h', 1000);
    print('e', 2000);
    print('l', 3000);
    print('l', 4000);
    print('o', 5000);
    print(',', 7000);
    print('\u00A0', 8000);
    print('I', 9000);
    print('\'', 10000);
    print('m', 11000);
    print('\u00A0', 12000);
    print('A', 13000);
    print('V', 14000);
    print('_', 15000);
    clear();
    setTimeout(() => {
        type();
    }, 16000);
}

document.addEventListener('DOMContentLoaded', () => {
    type(); // typing "hello, I'm AV_"
});