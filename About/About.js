function submitKritikSaran() {
    const kritikSaran = document.getElementById('kritikSaran').value;
    const responseMessage = document.getElementById('responseMessage');

    if (kritikSaran.trim() === '') {
        responseMessage.innerHTML = '<p style="color: red;">Silakan tulis kritik atau saran Anda terlebih dahulu.</p>';
    } else {
       
        responseMessage.innerHTML = '<p style="color: green;">Terima kasih atas kritik dan saran Anda!</p>';
        document.getElementById('kritikSaran').value = '';
    }
}