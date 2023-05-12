const print = (char, secs) => {
    setTimeout(() => {
        document.querySelector('#typing-animation').innerText += char;
    }, secs);
}

const clear = () => {
    document.querySelector('#typing-animation').innerText = "";
}

const type = () => {
    const phrase = "Hey\u00A0there!\u00A0I'm\u00A0Avuyile";
    const chars = Array.from(phrase);
    let secs = 0;
    for (let x = 0; x < chars.length; x++) {
        const char = chars[x];
        secs += 500;
        print(char, secs);
    }
    
    setTimeout(() => {
        clear();
    }, secs + 2000);

    setTimeout(() => {
        type();
    }, secs + 2500);
}

document.addEventListener('DOMContentLoaded', () => {
    type(); // typing...
});