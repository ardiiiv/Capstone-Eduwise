<script setup>
import IconQuiz from '@/assets/icon-quiz.png'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const answers = ref(Array(16).fill(null))

const handleSubmit = async () => {
  // Validasi semua pertanyaan telah dijawab
  if (answers.value.includes(null)) {
    alert('Silakan jawab semua pertanyaan sebelum submit')
    return
  }

  try {
    const response = await fetch('https://api-predict-eduwise-production.up.railway.app/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ responses: answers.value }),
    })

    if (!response.ok) {
      throw new Error('Gagal mendapatkan prediksi')
    }

    const result = await response.json()
    // Simpan hasil prediksi dan navigasi ke HasilPage
    router.push({
      path: '/hasilquiz',
      query: { style: result.predicted_style },
    })
  } catch (error) {
    console.error('Error:', error)
    alert('Terjadi kesalahan saat memproses hasil quiz')
  }
}

const updateAnswer = (questionIndex, value) => {
  answers.value[questionIndex] = value
}
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
    <div class="flex flex-col bg-white md:bg-transparent w-full max-w-3xl">
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
          <input
            value="A"
            type="radio"
            name="soal1"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(0, 'A')"
          />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >A. Bertanya langsung ke teman itu tentang arah dan petunjuk jalannya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal1"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(0, 'K')"
          />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >B. Mencari tahu lokasi toko itu berdasarkan tempat-tempat yang sudah kamu tahu di
            sekitarnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal1"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(0, 'R')"
          />
          <label for="soal1" class="text-gray-text text-sm md:text-lg ml-2"
            >C. Menulis alamat lengkap serta membuat catatan rute dari awal sampai tujuan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal1"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(0, 'V')"
          />
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
          <input
            value="A"
            type="radio"
            name="soal2"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(1, 'A')"
          />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Mendengarkan penjelasan lewat suara.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal2"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(1, 'K')"
          />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Melihat langsung bagaimana orangnya melakukan langkah-langkahnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal2"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(1, 'R')"
          />
          <label for="soal2" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Membaca instruksi atau langkah-langkah tertulisnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal2"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(1, 'V')"
          />
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
          <input
            value="K"
            type="radio"
            name="soal3"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(2, 'K')"
          />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Menelusuri aktivitas atau hal-hal menarik yang akan dilakukan selama tur.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal3"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(2, 'V')"
          />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Melihat lokasi-lokasi dalam tur lewat peta.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal3"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(2, 'R')"
          />
          <label for="soal3" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Membaca jadwal dan detail kegiatan turnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal3"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(2, 'A')"
          />
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
          <input
            value="A"
            type="radio"
            name="soal4"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(3, 'A')"
          />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Membutuhkan kemampuan melihat pola visual, seperti desain atau pemetaan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal4"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(3, 'V')"
          />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Membutuhkan banyak membaca dan menulis dokumen atau laporan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal4"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(3, 'K')"
          />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Mengharuskan kamu sering berkomunikasi secara lisan dengan orang lain.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal4"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(3, 'R')"
          />
          <label for="soal4" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Mengandalkan pengalaman langsung dan pemecahan masalah nyata.</label
          >
        </div>
      </div>

      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal5"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          5. Saat sedang belajar, kamu paling nyaman jika?
        </p>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal5"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(4, 'A')"
          />
          <label for="soal5" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Belajar lewat diskusi atau ngobrol dengan orang lain.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal5"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(4, 'V')"
          />
          <label for="soal5" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Menemukan pola atau bentuk visual dari materi tersebut.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal5"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(4, 'K')"
          />
          <label for="soal5" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Memahami lewat contoh nyata dan penerapan langsung</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal5"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(4, 'R')"
          />
          <label for="soal5" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Membaca buku, artikel, atau materi tertulis lainnya.</label
          >
        </div>
      </div>
      <!-- Soal 6 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal6"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          6. Kamu ingin mulai menabung lebih banyak dan mempertimbangkan berbagai cara. Apa yang
          kamu lakukan?
        </p>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal6"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(5, 'A')"
          />
          <label for="soal6" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Berdiskusi langsung dengan orang yang paham keuangan mengenai cara-cara berhemat yang
            bisa dilakukan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal6"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(5, 'V')"
          />
          <label for="soal6" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Menggunakan grafik atau tabel untuk membandingkan cara menabung.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal6"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(5, 'K')"
          />
          <label for="soal6" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Mempertimbangkan contoh dari setiap cara penghematan berdasarkan kondisi keuanganmu
            sekarang.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal6"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(5, 'R')"
          />
          <label for="soal6" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Membaca brosur atau artikel tentang cara menabung secara detail.</label
          >
        </div>
      </div>

      <!-- Soal 7 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal7"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          7. Kamu mau belajar bermain sebuah permainan kartu yang baru. Kamu akan belajar dengan
          cara?
        </p>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal7"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(6, 'K')"
          />
          <label for="soal7" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Menonton orang lain bermain dulu sebelum coba sendiri.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal7"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(6, 'A')"
          />
          <label for="soal7" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Mendengarkan penjelasan dari orang lain dan bertanya jika perlu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal7"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(6, 'V')"
          />
          <label for="soal7" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Menggunakan diagram atau visualisasi yang menjelaskan tahap, langkah dan strategi
            permainannya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal7"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(6, 'R')"
          />
          <label for="soal7" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Membaca buku panduan atau aturan tertulis dari permainan itu.</label
          >
        </div>
      </div>

      <!-- Soal 8 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md md:h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal8"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          8. Kamu mengalami masalah kesehatan ginjal. Dokter seperti apa yang kamu suka?
        </p>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal8"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(7, 'A')"
          />
          <label for="soal8" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Menjelaskan langsung dan berbicara soal masalah kamu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal8"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(7, 'R')"
          />
          <label for="soal8" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Memberikan bahan bacaan tentang kondisi kamu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal8"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(7, 'K')"
          />
          <label for="soal8" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Menunjukkan langsung dengan alat peraga ginjal.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal8"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(7, 'V')"
          />
          <label for="soal8" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Menjelaskan lewat diagram atau gambar anatomi.</label
          >
        </div>
      </div>

      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal9"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          9. Kamu ingin belajar suatu program baru di komputer. Cara yang kamu pilih?
        </p>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal9"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(8, 'A')"
          />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Tanya langsung ke orang yang udah bisa, sambil ngobrol.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal9"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(8, 'R')"
          />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Baca panduan tertulis pada petunjuknya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal9"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(8, 'K')"
          />
          <label for="soal9" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Langsung mencoba sendiri dan belajar dari kesalahan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal9"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(8, 'V')"
          />
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
          <input
            value="K"
            type="radio"
            name="soal10"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(9, 'K')"
          />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Ada videonya yang menjelaskan langkah-langkahnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal10"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(9, 'V')"
          />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Menarik secara tampilan, desain, atau visualnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal10"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(9, 'R')"
          />
          <label for="soal10" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Menyediakan informasi tertulis yang jelas dan lengkap.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal10"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(9, 'A')"
          />
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
          <input
            value="A"
            type="radio"
            name="soal11"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(10, 'A')"
          />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Minta waktu buat diskusi langsung mengenai proyek tersebut.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal11"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(10, 'K')"
          />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Lihat contoh proyek-proyek yang sudah pernah dibuat sebelumnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal11"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(10, 'R')"
          />
          <label for="soal11" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Minta laporan tertulis atau dokumen penjelasannya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal11"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(10, 'V')"
          />
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
          <input
            value="A"
            type="radio"
            name="soal12"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(11, 'A')"
          />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Tanya-tanya ke teman atau orang yang ngerti soal kamera itu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal12"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(11, 'K')"
          />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Lihat contoh hasil foto yang bagus dan yang kurang bagus dari kamera itu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal12"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(11, 'V')"
          />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Melihat gambar bagian-bagian kamera dan penjelasannya kamera itu.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal12"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(11, 'R')"
          />
          <label for="soal12" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Membaca panduan atau buku petunjuk tentang kamera itu.</label
          >
        </div>
      </div>

      <!-- soal 13 -->
      <div
        class="bg-white w-full max-w-3xl flex flex-col mt-4 rounded-md h-72 justify-center gap-4 shadow-none md:shadow-lg md:shadow-royal-blue"
        id="soal13"
      >
        <p class="text-gray-text px-3 text-sm md:text-lg">
          13. Saat ikut mendengarkan presentasi, kamu lebih suka pembicara yang?
        </p>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal13"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(12, 'A')"
          />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Melakukan Q&A, atau mengajak diskusi.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal13"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(12, 'V')"
          />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Menyediakan grafik, diagram, atau visualisasi.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal13"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(12, 'R')"
          />
          <label for="soal13" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Memberikan bahan bacaan, cetakan, atau slide PDF.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal13"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(12, 'K')"
          />
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
          <input
            value="A"
            type="radio"
            name="soal14"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(13, 'A')"
          />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Dibahas langsung lewat obrolan atau diskusi.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal14"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(13, 'K')"
          />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Dikasih contoh bagian mana yang bagus dan mana yang perlu diperbaiki.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal14"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(13, 'V')"
          />
          <label for="soal14" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Diperlihatkan grafik atau penilaian visual yang jelas.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal14"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(13, 'R')"
          />
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
          <input
            value="K"
            type="radio"
            name="soal15"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(14, 'K')"
          />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Lihat video dari rumah/apartemen tersebut.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal15"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(14, 'A')"
          />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Ngobrol dengan pemiliknya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal15"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(14, 'R')"
          />
          <label for="soal15" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Baca informasi tertulis soal ukuran dan fitur-fiturnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="V"
            type="radio"
            name="soal15"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(14, 'V')"
          />
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
          <input
            value="V"
            type="radio"
            name="soal16"
            id="a"
            class="scale-none md:scale-120"
            @change="updateAnswer(15, 'V')"
          />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >A.Mengikuti diagram langkah-langkah yang dilampirkan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="R"
            type="radio"
            name="soal16"
            id="b"
            class="scale-none md:scale-120"
            @change="updateAnswer(15, 'R')"
          />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >B.Membaca petunjuk tertulis yang disediakan.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="A"
            type="radio"
            name="soal16"
            id="c"
            class="scale-none md:scale-120"
            @change="updateAnswer(15, 'A')"
          />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >C.Bertanya pada orang yang pernah merakit sebelumnya.</label
          >
        </div>
        <div class="flex flex-row mx-3">
          <input
            value="K"
            type="radio"
            name="soal16"
            id="d"
            class="scale-none md:scale-120"
            @change="updateAnswer(15, 'K')"
          />
          <label for="soal16" class="text-gray-text text-sm md:text-lg ml-2"
            >D.Menonton video orang lain merakit meja yang sama.</label
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

        <button
          @click="handleSubmit"
          class="bg-royal-blue text-white md:px-10 md:py-3 px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-lg mr-4 md:mr-0"
        >
          Submit
        </button>
      </div>
    </div>
  </main>
</template>
