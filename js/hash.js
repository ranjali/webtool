document.getElementById('hash-compute').addEventListener('click', async () => {
    const algorithm = document.getElementById('hash-algorithm').value;
    const inputType = document.getElementById('hash-input-type').value;
    const input = document.getElementById('hash-input').value;

    try {
        let buffer;
        if (inputType === 'text') {
            buffer = new TextEncoder().encode(input);
        } else if (inputType === 'hex') {
            buffer = new Uint8Array(input.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        } else if (inputType === 'base64') {
            buffer = new Uint8Array(atob(input).split('').map(char => char.charCodeAt(0)));
        } else {
            throw new Error('Invalid input type');
        }

        const hashBuffer = await crypto.subtle.digest(algorithm, buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        document.getElementById('hash-output').value = hashHex;
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
