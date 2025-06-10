<script setup>
import Auditori from '@/assets/auditori.png'
import Visual from '@/assets/visual.png'
import Kinestetik from '@/assets/kinestetik.png'
import Reading from '@/assets/reading.png'
import NavBar from '@/ui/NavBar.vue'
import { ref } from 'vue'

const isNavOpen = ref(false)
const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <div class="bg-white md:bg-gradient-to-b flex flex-col h-screen w-screen overflow-hidden">
    <NavBar />

    <main class="flex-1 overflow-auto pt-16 h-full bg-gray-bg">
      <div
        class="flex flex-col w-full max-w-5xl bg-white shadow-lg shadow-royal-blue pt-20 mx-auto pb-20"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-royal-blue text-3xl md:text-4xl font-semibold">4 Gaya Belajar</h1>
          <p class="text-royal-blue text-lg">Macam - macam tipe gaya belajar</p>
        </div>
        <div class="flex flex-col gap-6 mt-10 mx-16 justify-center">
          <div class="flex flex-col md:flex-row gap-2">
            <img :src="Visual" alt="visual" class="w-44" />
            <div class="flex flex-col">
              <h2 class="text-royal-blue text-2xl font-semibold">Visual</h2>
              <p class="text-royal-blue text-lg">
                Gaya belajar visual lebih menyukai informasi yang disampaikan melalui gambar,
                diagram, atau visualisasi lainnya. Orang dengan gaya belajar visual lebih mudah
                mengingat informasi yang dilihat daripada yang didengar. 
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row-reverse gap-2">
            <img :src="Auditori" alt="auditori" class="w-44" />
            <div class="flex flex-col">
              <h2 class="text-royal-blue text-2xl font-semibold">Auditori</h2>
              <p class="text-royal-blue text-lg">
                Gaya belajar auditori lebih menyukai informasi yang disampaikan secara lisan atau
                melalui pendengaran.Orang dengan gaya belajar auditori lebih mudah mengingat
                informasi yang didengar daripada yang dilihat
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-2">
            <img :src="Kinestetik" alt="Kinestetik" class="w-44" />
            <div class="flex flex-col">
              <h2 class="text-royal-blue text-2xl font-semibold">Kinestetik</h2>
              <p class="text-royal-blue text-lg">
                Gaya belajar kinestetik lebih menyukai informasi yang disampaikan melalui kegiatan
                praktik atau melibatkan gerakan fisik. Orang dengan gaya belajar kinestetik lebih
                mudah mengingat informasi melalui pengalaman langsung.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row-reverse gap-2">
            <img :src="Reading" alt="reading" class="w-44" />
            <div class="flex flex-col">
              <h2 class="text-royal-blue text-2xl font-semibold">Reading</h2>
              <p class="text-royal-blue text-lg">
                Gaya belajar seseorang menyerap dan mengingat informasi melalui teks. Individu
                dengan gaya belajar ini lebih suka membaca, menulis, dan mengandalkan bahan bacaan
                untuk memahami materi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-royal-blue w-full py-4 md:py-5">
        <div class="container mx-auto text-center">
          <h2 class="text-white text-base">
            © 2025 Eduwise Personalized Learning Style Detection | Team CC25-CF234
          </h2>
        </div>
      </footer>
    </main>
  </div>
</template>
