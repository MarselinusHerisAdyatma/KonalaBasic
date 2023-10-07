document.addEventListener("DOMContentLoaded", function () {

    // Inisialisasi carousel
var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
    interval: 5000, // Interval waktu dalam milidetik antara slide
    wrap: true // Mengaktifkan putar ulang otomatis
  });
  
  // Fungsi untuk mengaktifkan slide sebelumnya
  function prevSlide() {
    myCarousel.prev();
  }
  
  // Fungsi untuk mengaktifkan slide berikutnya
  function nextSlide() {
    myCarousel.next();
  }
  
  // Menangkap tombol-tombol kontrol prev dan next
  var prevButton = document.querySelector('.carousel-control-prev');
  var nextButton = document.querySelector('.carousel-control-next');
  
  // Menambahkan event listener untuk tombol-tombol kontrol
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

   // script.js
document.getElementById("btnHijab").addEventListener("click", function () {
    document.getElementById("productImages").innerHTML = `
      <div class="col-md-4">
        <img src="https://i.pinimg.com/736x/9c/b4/a8/9cb4a8014e9a3dcbd138a6d1b103f8ce.jpg" class="img-fluid" alt="Produk 4">
      </div>
      <div class="col-md-4">
        <img src="https://i.pinimg.com/736x/9c/b4/a8/9cb4a8014e9a3dcbd138a6d1b103f8ce.jpg" class="img-fluid" alt="Produk 5">
      </div>
      <div class="col-md-4">
        <img src="https://i.pinimg.com/736x/9c/b4/a8/9cb4a8014e9a3dcbd138a6d1b103f8ce.jpg" class="img-fluid" alt="Produk 6">
      </div>
      <!-- Lanjutkan dengan gambar produk hijab lainnya sesuai kebutuhan -->
    `;
  });
  
  document.getElementById("btnHampers").addEventListener("click", function () {
    document.getElementById("productImages").innerHTML = `
      <div class="col-md-4">
        <img src="https://i.pinimg.com/564x/26/b6/a3/26b6a33a9f93c06c0b99cadbb600c309.jpg" class="img-fluid" alt="Produk 7">
      </div>
      <div class="col-md-4">
        <img src="https://i.pinimg.com/564x/26/b6/a3/26b6a33a9f93c06c0b99cadbb600c309.jpg" class="img-fluid" alt="Produk 8">
      </div>
      <div class="col-md-4">
        <img src="https://i.pinimg.com/564x/26/b6/a3/26b6a33a9f93c06c0b99cadbb600c309.jpg" class="img-fluid" alt="Produk 9">
      </div>
      <!-- Lanjutkan dengan gambar produk hampers lainnya sesuai kebutuhan -->
    `;
  });
  
  document.getElementById("btnDressMuslim").addEventListener("click", function () {
    document.getElementById("productImages").innerHTML = `
      <div class="col-md-4">
        <img src="https://i.pinimg.com/564x/67/a7/0d/67a70dd905922b1f6e25c7881214d5ac.jpg" class="img-fluid" alt="Produk 10">
      </div>
      <div class="col-md-4">
        <img src="https://i.pinimg.com/564x/67/a7/0d/67a70dd905922b1f6e25c7881214d5ac.jpg" class="img-fluid" alt="Produk 11">
      </div>
      <div class="col-md-4">
        <img src="https://i.pinimg.com/564x/67/a7/0d/67a70dd905922b1f6e25c7881214d5ac.jpg" class="img-fluid" alt="Produk 12">
      </div>
      <!-- Lanjutkan dengan gambar produk dress muslim lainnya sesuai kebutuhan -->
    `;
  });  
});