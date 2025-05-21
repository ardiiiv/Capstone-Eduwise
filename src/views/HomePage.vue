<script setup>
import Profile from '@/assets/profile.png'
import quiz from '@/assets/icons8-quiz-100.png'
import { ref } from 'vue'

const isNavOpen = ref(false)
const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <div
    class="h-screen w-screen flex flex-col bg-gray-bg md:bg-gradient-to-b md:from-blue-gradient md:from-0% md:to-dark-gradient md:to-100%"
  >
    <!-- Header -->
    <header class="bg-blue-eduwise flex justify-center w-full py-4 md:py-5 fixed z-10">
      <div class="flex container justify-between items-center relative px-2 md:px-2">
        <h1 class="text-white text-xl md:text-2xl font-bold">EduWise</h1>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex flex-row gap-6 items-center">
          <router-link
            to="/home"
            class="text-white text-lg hover:font-semibold hover:scale-110 hover:duration-200 hover:relative transition"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="text-white text-lg hover:font-semibold hover:scale-110 hover:duration-200 hover:relative transition"
            >About</router-link
          >
          <router-link
            to="/learningstyle"
            class="text-white text-lg hover:font-semibold hover:scale-110 hover:duration-200 hover:relative transition"
            >Learning Style</router-link
          >
          <a href="" class="w-8 h-8 group">
            <img
              :src="Profile"
              alt="Profile"
              class="rounded-full group-hover:animate-bounce transition"
            />
          </a>
        </nav>

        <!-- Burger Button (mobile only) -->
        <button
          @click="toggleButton"
          class="md:hidden text-white z-20"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Mobile Navigation -->
        <div
          class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          :class="isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
          @click="toggleButton"
        ></div>

        <nav
          class="md:hidden fixed top-0 right-0 h-full w-64 bg-blue-eduwise flex flex-col items-center pt-20 gap-8 z-10 transition-transform duration-300"
          :class="isNavOpen ? 'translate-x-0' : 'translate-x-full'"
        >
          <router-link
            to="/home"
            class="text-white text-lg hover:font-semibold transition"
            @click="toggleButton"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="text-white text-lg hover:font-semibold transition"
            @click="toggleButton"
            >About</router-link
          >
          <RouterLink
            to="/learningstyle"
            class="text-white text-lg hover:font-semibold transition"
            @click="toggleButton"
            >Learning Style</RouterLink
          >
          <router-link
            to="/profile"
            class="flex items-center gap-2 text-white text-lg hover:font-semibold transition"
            @click="toggleButton"
          >
            <img :src="Profile" alt="Profile" class="w-8 h-8 rounded-full" />
            Profile
          </router-link>
        </nav>
      </div>
    </header>
    <!-- Main Content -->
    <main class="max-w-screen-md mx-auto h-full flex-grow flex items-center pt-10">
      <div
        class="flex flex-col items-center gap-4 bg-white md:bg-gray-bg rounded-lg p-8 max-w-xl h-96 shadow-none md:shadow-blue-200 md:shadow-lg"
      >
        <div class="flex flex-col my-auto justify-center items-center">
          <img :src="quiz" alt="quiz" class="w-24 h-24 md:w-32 md:h-32" />
          <p class="text-gray-text text-sm md:text-base">
            EduWise adalah platform interaktif yang membantu individual memahami gaya belajar mereka
            secara akurat. Ikuti quiz singkat untuk menemukan metode belajar yang paling cocok untuk
            Anda. Tekan tombol Quiz untuk memulai.
          </p>
          <div class="self-end">
            <button
              class="bg-blue-eduwise px-7 py-2 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 animate-pulse shadow-lg hover:animate-none"
            >
              Quiz
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-blue-eduwise py-4 w-full">
      <div class="container mx-auto text-center">
        <h2 class="text-white font-semibold text-sm md:text-base lg:text-lg">Build With Love</h2>
      </div>
    </footer>
  </div>
</template>
