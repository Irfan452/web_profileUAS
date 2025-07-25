document.addEventListener('DOMContentLoaded', function() {
    // Toggle Sidebar
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });
    
    // Navigasi Menu
    const menuLinks = document.querySelectorAll('.menu a');
    const pages = document.querySelectorAll('.page');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Tutup sidebar di mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                content.classList.remove('active');
            }
            
            // Hapus active dari semua menu dan halaman
            menuLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Tambah active ke menu yang diklik
            this.classList.add('active');
            
            // Tampilkan halaman yang sesuai
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
        });
    });
    
    // Tutup sidebar saat klik di luar sidebar
    content.addEventListener('click', function() {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            content.classList.remove('active');
        }
    });
});
// Validasi Form Kontak
function validateForm() {
    const nama = document.forms["kontak-form"]["nama"].value.trim();
    const email = document.forms["kontak-form"]["email"].value.trim();
    const pesan = document.forms["kontak-form"]["pesan"].value.trim();

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
        return false;
    }

    // Validasi email sederhana
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    return true;
}
