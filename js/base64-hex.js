function base64ToHex(base64) {
    const raw = atob(base64);
    return Array.from(raw).map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}

function hexToBase64(hex) {
    const raw = hex.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    return btoa(raw);
}

document.getElementById('base64-to-hex').addEventListener('click', () => {
    const base64 = document.getElementById('base64-input').value;
    try {
        const hex = base64ToHex(base64);
        document.getElementById('hex-input').value = hex;
    } catch {
        alert('Invalid Base64 input');
    }
});

document.getElementById('hex-to-base64').addEventListener('click', () => {
    const hex = document.getElementById('hex-input').value;
    try {
        const base64 = hexToBase64(hex);
        document.getElementById('base64-input').value = base64;
    } catch {
        alert('Invalid Hex input');
    }
});
