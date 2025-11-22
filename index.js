// Sử dụng async/await
async function getCurrentIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Lỗi khi lấy IP:', error);
        return null;
    }
}

// Sử dụng
getCurrentIP().then(ip => {
    console.log('IP hiện tại:', ip);
});
