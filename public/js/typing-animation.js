const print = (char, secs) => {
    setTimeout(() => {
        document.querySelector('#typing-animation').innerText += char;
    }, secs);
}

const clear = () => {
    let text = document.querySelector('#typing-animation').innerText;
    let secs = 0;
    for (let y = 0; y < text.length; y++) {
        secs += 250;
        setTimeout(() => {
            text = text.slice(0, -1);
            document.querySelector('#typing-animation').innerText = text;
        }, secs);
    }
}

const type = () => {
    const phrase = "Hey\u00A0there!\u00A0I'm\u00A0Avuyile.";
    const chars = Array.from(phrase);
    let secs = 0;
    for (let x = 0; x < chars.length; x++) {
        const char = chars[x];
        secs += 500;
        print(char, secs);
    }
    
    setTimeout(() => {
        clear();
    }, secs + 6000);

    setTimeout(() => {
        type();
    }, secs + 12000);
}

document.addEventListener('DOMContentLoaded', () => {
    type(); // typing...
});