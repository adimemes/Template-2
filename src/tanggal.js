document.addEventListener("DOMContentLoaded", function () {
    const dateSection = document.getElementById("date-section"); // Section tanggal
    const dayCounter = document.getElementById("day-counter"); // Elemen angka tanggal
  
    // Fungsi untuk menjalankan animasi counter
    function startCounter() {
      let counter = 1; // Mulai dari angka 1
      const target = 10; // Angka tujuan (06)
      const interval = 200; // Waktu antar perubahan angka
  
      // Set interval untuk update angka
      const countUp = setInterval(() => {
        if (counter <= target) {
          dayCounter.textContent = counter < 10 ? `0${counter}` : counter; // Format dua digit
          counter++;
        } else {
          clearInterval(countUp); // Hentikan animasi jika sudah selesai
        }
      }, interval);
    }
  
    let hasAnimated = false; // Flag untuk memastikan animasi hanya dilakukan sekali
  
    // Intersection Observer untuk memantau elemen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dateSection.classList.add("visible"); // Menambahkan animasi fade-in
  
          // Jika animasi belum pernah dijalankan, jalankan animasi
          if (!hasAnimated) {
            hasAnimated = true;
            startCounter(); // Mulai animasi counter
          }
        } else {
          // Reset flag saat elemen keluar dari viewport
          hasAnimated = false;
          dayCounter.textContent = "01"; // Reset tanggal ke angka awal
          dateSection.classList.remove("visible"); // Menghilangkan animasi fade-in
        }
      });
    });
  
    // Pantau elemen date-counter
    observer.observe(dateSection);
  });