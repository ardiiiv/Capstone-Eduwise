<template>
  <main class="flex flex-col items-center max-w-screen h-full bg-gray-bg">
    <div
      class="flex flex-rows items-center w-full max-w-3xl justify-center bg-white rounded-lg mt-10 mb-4 h-24 shadow-lg shadow-royal-blue"
    >
      <p class="text-gray-text text-xl md:text-3xl font-semibold text-center md:text-left">
        Dikit lagi, kamu sudah tahu gaya belajarmu yang pas!
      </p>
    </div>

    <!-- halaman soal4 -->
    <div class="flex flex-col bg-white md:bg-transparent">
      <!-- soal 13 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal13"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          13. Saat ikut mendengarkan presentasi, kamu lebih suka pembicara yang?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal13" id="a" class="scale-none md:scale-120" />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Melakukan Q&A, atau mengajak diskusi.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal13" id="b" class="scale-none md:scale-120" />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Menyediakan grafik, diagram, atau visualisasi.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal13" id="c" class="scale-none md:scale-120" />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Memberikan bahan bacaan, cetakan, atau slide PDF.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal13" id="d" class="scale-none md:scale-120" />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Membawa alat peraga, demo langsung, atau ajak praktik.</label
          >
        </div>
      </div>

      <!-- soal 14 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal14"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          14. Setelah menyelesaikan tugas atau presentasi, cara yang paling kamu suka untuk menerima
          masukan dari dosen atau teman adalah?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal14" id="a" class="scale-none md:scale-120" />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Dibahas langsung lewat obrolan atau diskusi.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal14" id="b" class="scale-none md:scale-120" />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Dikasih contoh bagian mana yang bagus dan mana yang perlu diperbaiki.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal14" id="c" class="scale-none md:scale-120" />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Diperlihatkan grafik atau penilaian visual yang jelas.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal14" id="d" class="scale-none md:scale-120" />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Diberi penjelasan tertulis tentang kekurangan dan kelebihan pekerjaan kamu.</label
          >
        </div>
      </div>

      <!-- soal 15 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal15"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          15. Kamu tertarik sama rumah atau apartemen. Sebelum mengunjungi, kamu akan?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal15" id="a" class="scale-none md:scale-120" />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Lihat video dari rumah/apartemen tersebut.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal15" id="b" class="scale-none md:scale-120" />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Ngobrol dengan pemiliknya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal15" id="c" class="scale-none md:scale-120" />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Baca informasi tertulis soal ukuran dan fitur-fiturnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal15" id="d" class="scale-none md:scale-120" />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Lihat denah ruangan dan peta lingkungan sekitarnya.</label
          >
        </div>
      </div>

      <!-- soal 16 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal16"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          16. Kamu dapat meja kayu yang harus dirakit sendiri. Supaya paham caranya, kamu?
        </p>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal16" id="a" class="scale-none md:scale-120" />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Mengikuti diagram langkah-langkah yang dilampirkan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal16" id="b" class="scale-none md:scale-120" />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Membaca petunjuk tertulis yang disediakan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal16" id="c" class="scale-none md:scale-120" />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Bertanya pada orang yang pernah merakit sebelumnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input type="radio" name="soal16" id="d" class="scale-none md:scale-120" />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Menonton video orang lain merakit meja yang sama.</label
          >
        </div>
      </div>
    </div>

    <div class="w-full max-w-3xl flex justify-between py-8">
      <router-link
        to="/quiz3"
        class="bg-royal-blue text-white md:px-9 md:py-3 px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-lg ml-4 md:ml-0"
      >
        Soal Sebelumnya
      </router-link>
      <router-link
        to="/hasilquiz"
        type="submit"
        class="bg-royal-blue text-white md:px-10 md:py-3 px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-lg mr-4 md:mr-0"
      >
        Submit
      </router-link>
    </div>
  </main>
</template>
