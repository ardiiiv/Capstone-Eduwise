<script setup>
import IconQuiz from '@/assets/icon-quiz.png'
</script>

<template>
  <main class="flex flex-col items-center max-w-screen h-full bg-gray-bg gap-3">
    <div class="w-full max-w-3xl mt-6 flex flex-col items-center">
      <img :src="IconQuiz" alt="quiz" class="w-8/12" />
    </div>
    <div
      class="bg-white w-full max-w-3xl flex flex-col items-center mt-4 rounded-md p-3 md:p-5 shadow-lg shadow-royal-blue"
    >
      <h1 class="text-royal-blue text-2xl md:text-3xl">Kuisioner Gaya Belajar</h1>
    </div>
    <div
      class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md p-3 md:p-5 text-gray-text gap-2 shadow-lg shadow-royal-blue"
    >
      <h3 class="text-lg md:text-xl font-semibold">Baca panduan pengisiannya, ya!</h3>
      <p class="md:text-lg">
        1. Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai kepribadianmu.
        <br />2. Santai aja, tes ini gak diberi waktu, kok.<br />3. Cari tempat yang nyaman dan
        kondusif supaya kamu lebih fokus.<br />4 .Jika kamu keluar di tengah tes, maka seluruh
        proses tes dan jawaban akan hilang.<br />5. Hasil tes bisa kamu dapatkan setelah mengisi
        semua pertanyaan dengan lengkap.
      </p>
    </div>
    <div class="flex flex-col bg-white md:bg-transparent">
      <!-- Soal 1 -->
      <div
        class="bg-white max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-3 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal1"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          1. Teman kamu merekomendasikan sebuah toko yang bagus. Untuk menemukan toko itu, kamu
          akan?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal1" id="a" class="scale-none md:scale-120" />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >A. Bertanya langsung ke teman itu tentang arah dan petunjuk jalannya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal1" id="b" class="scale-none md:scale-120" />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >B. Mencari tahu lokasi toko itu berdasarkan tempat-tempat yang sudah kamu tahu di
            sekitarnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal1" id="c" class="scale-none md:scale-120" />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >C. Menulis alamat lengkap serta membuat catatan rute dari awal sampai tujuan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal1" id="d" class="scale-none md:scale-120" />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >D. Menggunakan peta untuk melihat lokasi toko itu.</label
          >
        </div>
      </div>

      <!-- soal 2 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal2"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          2. Kamu membuka website yang menjelaskan cara membuat suatu grafik khusus. Di dalamnya ada
          orang yang menjelaskan dengan suara, ada daftar langkah-langkah tertulis, dan juga
          beberapa diagram. Cara mana yang paling membantu kamu memahami isi situs itu?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal2" id="a" class="scale-none md:scale-120" />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Mendengarkan penjelasan lewat suara.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal2" id="b" class="scale-none md:scale-120" />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Melihat langsung bagaimana orangnya melakukan langkah-langkahnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal2" id="c" class="scale-none md:scale-120" />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Membaca instruksi atau langkah-langkah tertulisnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal2" id="d" class="scale-none md:scale-120" />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Melihat diagram atau gambar petunjuknya.</label
          >
        </div>
      </div>

      <!-- Soal 3 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal3"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          3. Kamu sedang merencanakan ikut tur wisata. Untuk tahu lebih lanjut, kamu akan?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal3" id="a" class="scale-none md:scale-120" />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Menelusuri aktivitas atau hal-hal menarik yang akan dilakukan selama tur.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal3" id="b" class="scale-none md:scale-120" />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Melihat lokasi-lokasi dalam tur lewat peta.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal3" id="c" class="scale-none md:scale-120" />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Membaca jadwal dan detail kegiatan turnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal3" id="d" class="scale-none md:scale-120" />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Berdiskusi langsung dengan penyelenggara atau peserta lain.</label
          >
        </div>
      </div>

      <!-- Soal 4 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal4"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          4. Dalam memilih karier masa depan, kamu ingin pekerjaan yang?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal4" id="a" class="scale-none md:scale-120" />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Membutuhkan kemampuan melihat pola visual, seperti desain atau pemetaan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal4" id="b" class="scale-none md:scale-120" />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Membutuhkan banyak membaca dan menulis dokumen atau laporan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal4" id="c" class="scale-none md:scale-120" />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Mengharuskan kamu sering berkomunikasi secara lisan dengan orang lain.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal4" id="d" class="scale-none md:scale-120" />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Mengandalkan pengalaman langsung dan pemecahan masalah nyata.</label
          >
        </div>
      </div>

      <div class="flex flex-rows justify-between my-8 w-full max-w-3xl">
        <router-link
          to="/"
          class="bg-royal-blue text-white py-2 px-3 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 text-sm md:text-lg ml-4 md:ml-0"
        >
          Keluar
        </router-link>

        <router-link
          to="/quiz2"
          class="bg-royal-blue text-white py-2 px-4 md:px-10 md:py-3 rounded-lg hover:bg-blue-700 text-sm md:text-lg mr-4 md:mr-0"
        >
          Soal Selanjutnya
        </router-link>
      </div>
    </div>
  </main>
</template>
