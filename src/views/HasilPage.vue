<script setup>
import NavBar from '@/ui/NavBar.vue'
import Visual from '@/assets/visual.png'
import reading from '@/assets/reading.png'
import auditori from '@/assets/auditori.png'
import kinestetik from '@/assets/kinestetik.png'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const predictedStyle = route.query.style

const styleData = computed(() => {
  const styles = {
    visual: {
      image: Visual,
      title: 'Visual',
      description:
        'Gaya belajar visual lebih menyukai informasi yang disampaikan melalui gambar, diagram, atau visualisasi lainnya. Orang dengan gaya belajar visual lebih mudah mengingat informasi yang dilihat daripada yang didengar.',
    },
    'read/write': {
      image: reading,
      title: 'Read/Write',
      description:
        'Gaya belajar read/write lebih menyukai informasi dalam bentuk teks tertulis. Orang dengan gaya belajar ini lebih mudah memahami dan mengingat informasi dengan membaca dan menulis.',
    },
    aural: {
      image: auditori,
      title: 'Aural',
      description:
        'Gaya belajar aural lebih menyukai informasi yang disampaikan secara auditori. Orang dengan gaya belajar ini lebih mudah memahami dan mengingat informasi melalui pendengaran.',
    },
    kinesthetic: {
      image: kinestetik,
      title: 'Kinesthetic',
      description:
        'Gaya belajar kinestetik lebih menyukai pembelajaran melalui praktik langsung dan pengalaman fisik. Orang dengan gaya belajar ini lebih mudah memahami dengan melakukan dan menyentuh.',
    },
  }

  return styles[predictedStyle] || styles.visual
})
</script>

<template>
  <div class="bg-gray-bg flex flex-col h-screen w-screen overflow-hidden">
    <NavBar />
    <main class="flex items-center justify-center w-full h-full">
      <div
        class="bg-white w-full max-w-3xl h-96 mx-4 rounded-lg shadow-lg shadow-royal-blue flex flex-col items-center justify-center gap-3"
      >
        <div class="flex flex-row justify-around w-full">
          <img :src="styleData.image" :alt="styleData.title" class="w-30 h-40 mx-6 md:mx-0" />
          <div class="flex flex-col">
            <h1 class="text-royal-blue text-2xl md:text-3xl mx-6 md:mx-0">Hasil Kuis Kamu</h1>
            <h2 class="text-royal-blue text-2xl md:text-3xl font-bold mx-6 md:mx-0">
              {{ styleData.title }}
            </h2>
          </div>
        </div>
        <p class="text-gray-text text-sm md:text-lg text-center mx-6">
          {{ styleData.description }}
        </p>
        <button
          class="bg-royal-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors self-end mx-6"
        >
          Selesai
        </button>
      </div>
    </main>
    <footer class="bg-royal-blue w-full py-4 md:py-5">
      <div class="container mx-auto text-center">
        <h2 class="text-white text-base">
          © 2025 Eduwise Personalized Learning Style Detection | Team CC25-CF234
        </h2>
      </div>
    </footer>
  </div>
</template>
