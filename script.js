// EmailJS configuration
(function() {
    emailjs.init("YOUR_USER_ID"); // Ganti YOUR_USER_ID dengan User ID Anda
})();

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    // Kirim email menggunakan EmailJS
    emailjs.send("Fraell", "Fraell", { // Ganti dengan "Fraell" sebagai Service ID dan Template ID
        from_name: name,
        review: review,
        to_email: "xihexihe2323@gmail.com" // Alamat email tujuan
    }).then(function(response) {
        alert('Ulasan Anda telah dikirim!');
        document.getElementById('reviewForm').reset(); // Reset form
    }, function(error) {
        alert('Gagal mengirim ulasan. Silakan coba lagi.');
    });
});
