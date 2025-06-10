<script setup></script>

<template>
  <main class="flex flex-col items-center max-w-screen h-full bg-gray-bg">
    <div
      class="flex items-center w-full max-w-3xl justify-center bg-white rounded-lg mt-10 mb-4 h-24 shadow-lg shadow-royal-blue"
    >
      <p class="text-gray-text text-2xl md:text-3xl font-semibold text-center md:text-left">
        Jangan ragu, temukan gaya belajarmu yang cocok!
      </p>
    </div>

    <div class="flex flex-col bg-white md:bg-transparent w-full max-w-3xl">
      <!-- soal 9 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal9"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          9. Kamu ingin belajar suatu program baru di komputer. Cara yang kamu pilih?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal9" id="a" class="scale-none md:scale-120" />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Tanya langsung ke orang yang udah bisa, sambil ngobrol.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal9" id="b" class="scale-none md:scale-120" />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Baca panduan tertulis pada petunjuknya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal9" id="c" class="scale-none md:scale-120" />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Langsung mencoba sendiri dan belajar dari kesalahan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal9" id="d" class="scale-none md:scale-120" />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Ikuti petunjuk diagram dari buku petunjuknya.</label
          >
        </div>
      </div>

      <!-- soal 10 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal10"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          10. Kalau kamu belajar sesuatu dari internet, kamu akan memilih situs yang?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal10" id="a" class="scale-none md:scale-120" />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Ada videonya yang menjelaskan langkah-langkahnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal10" id="b" class="scale-none md:scale-120" />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Menarik secara tampilan, desain, atau visualnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal10" id="c" class="scale-none md:scale-120" />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Menyediakan informasi tertulis yang jelas dan lengkap.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal10" id="d" class="scale-none md:scale-120" />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Ada suara, wawancara, atau penjelasan audio-nya.</label
          >
        </div>
      </div>

      <!-- soal 11 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal11"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          11. Kamu mulai ngerjain proyek kerja atau tugas baru. Supaya paham, kamu akan?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal11" id="a" class="scale-none md:scale-120" />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Minta waktu buat diskusi langsung mengenai proyek tersebut.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal11" id="b" class="scale-none md:scale-120" />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Lihat contoh proyek-proyek yang sudah pernah dibuat sebelumnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal11" id="c" class="scale-none md:scale-120" />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Minta laporan tertulis atau dokumen penjelasannya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal11" id="d" class="scale-none md:scale-120" />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Minta diagram alur kerja, bagan, atau infografik proyeknya.</label
          >
        </div>
      </div>

      <!-- soal 12 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal12"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          12.Kamu ingin belajar cara motret yang lebih baik. Kamu akan belajar dengan cara?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal12" id="a" class="scale-none md:scale-120" />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Tanya-tanya ke teman atau orang yang ngerti soal kamera itu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal12" id="b" class="scale-none md:scale-120" />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Lihat contoh hasil foto yang bagus dan yang kurang bagus dari kamera itu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal12" id="c" class="scale-none md:scale-120" />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Melihat gambar bagian-bagian kamera dan penjelasannya kamera itu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal12" id="d" class="scale-none md:scale-120" />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Membaca panduan atau buku petunjuk tentang kamera itu.</label
          >
        </div>
      </div>
      <div class="w-full max-w-3xl flex justify-between py-8">
        <router-link
          to="/quiz2"
          class="bg-royal-blue text-white md:px-9 md:py-3 px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-lg ml-4 md:ml-0"
        >
          Soal Sebelumnya
        </router-link>
        <router-link
          to="/quiz4"
          class="bg-royal-blue text-white md:px-10 md:py-3 px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-lg mr-4 md:mr-0"
        >
          Soal Selanjutnya
        </router-link>
      </div>
    </div>
  </main>
</template>
