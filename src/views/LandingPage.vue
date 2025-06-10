<script setup>
import logoLandingPage from '@/assets/utama.png'
import NavBar from '@/ui/NavBar.vue'
</script>

<template>
  <div class="bg-white flex flex-col h-screen w-screen overflow-hidden">
    <NavBar />

    <main class="flex-1 overflow-auto h-screen pt-16">
      <div
        class="bg-white max-w-md md:max-w-screen-lg mx-auto h-full flex items-center shadow-none md:shadow-royal-blue md:shadow-2xl"
      >
        <div class="rounded-lg flex flex-col md:flex-row w-full items-center p-6 h-fit md:full">
          <div class="flex flex-col mx-7 justify-center md:w-1/2">
            <h1 class="text-royal-blue text-4xl md:text-5xl font-bold mt-48 md:mt-0 mb-7">
              Selamat Datang di EduWise
            </h1>
            <p class="text-gray-text text-base md:text-justify mb-6">
              EduWise adalah platform interaktif yang membantu Individu memahami gaya belajar mereka
              secara akurat. <br />
              <br />
              Temukan cara belajar yang sesuai dengan gaya dan kebutuhan Anda bersama Eduwise untuk
              mecapai tujuan Anda. Ikuti quiz singkat untuk menemukan metode belajar yang paling
              cocok untuk Anda. Tekan tombol Quiz untuk memulai.
            </p>
            <div class="flex justify-end gap-4">
              <router-link
                to="/quiz"
                class="bg-royal-blue px-8 py-2 text-sm md:text-base rounded-lg shadow-lg text-white hover:bg-blue-700 text-center transition"
              >
                Quiz
              </router-link>
            </div>
          </div>
          <div class="max-w-xs md:max-w-sm mx-8 md:w-1/2 mt-6 md:mt-0">
            <img :src="logoLandingPage" alt="logo landing page" class="w-full" />
          </div>
        </div>
      </div>
      <footer class="bg-royal-blue w-full py-4 md:py-5 mt-52 md:mt-0">
        <div class="container mx-auto text-center">
          <h2 class="text-white text-base">
            © 2025 Eduwise Personalized Learning Style Detection | Team CC25-CF234
          </h2>
        </div>
      </footer>
    </main>
  </div>
</template>
