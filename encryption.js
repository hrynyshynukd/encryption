function encryptMessage(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shift = 5;
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        let isUpperCase = (char >= 'A' && char <= 'Z');
        
        if (isUpperCase) {
            char = char.toLowerCase();
        }

        if (char >= 'a' && char <= 'z') {
            let currentIndex = alphabet.indexOf(char);
            let newIndex = (currentIndex + shift) % alphabet.length;
            let newChar = alphabet[newIndex];

            if (isUpperCase) {
                newChar = newChar.toUpperCase();
            }

            encryptedMessage += newChar;
        } else {
            encryptedMessage += message[i];
        }
    }

    return encryptedMessage;
}

let message = prompt("Введіть повідомлення, яке потрібно зашифрувати (англійською): ");
let encrypted = encryptMessage(message);
console.log("Зашифроване повідомлення:", encrypted);
