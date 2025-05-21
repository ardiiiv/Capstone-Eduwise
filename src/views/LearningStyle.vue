<script setup>
import Profile from '@/assets/profile.png'
import EarIcon from '@/assets/ear-100.png'
import ReadingIcon from '@/assets/reading-100.png'
import VisualIcon from '@/assets/visual-100.png'
import YogaIcon from '@/assets/yoga-100.png'
import { ref } from 'vue'

const isNavOpen = ref(false)
const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <div
    class="bg-white md:bg-gradient-to-b md:from-blue-gradient md:from-0% md:to-dark-gradient md:to-100% flex flex-col h-screen w-screen overflow-hidden"
  >
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
          <router-link
            to="/learningstyle"
            class="text-white text-lg hover:font-semibold transition"
            @click="toggleButton"
            >Learning Style</router-link
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

    <main class="flex-1 overflow-auto pt-10">
      <div
        class="flex flex-col md:flex-col w-full mx-auto px-4 items-center md:bg-white max-w-screen-lg shadow-none md:shadow-blue-200 md:shadow-2xl md:h-full overflow-hidden"
      >
        <div class="flex flex-col md:flex-col gap-1 overflow-hidden p-4 w-full h-full">
          <h1
            class="font-semibold text-blue-eduwise text-2xl md:text-3xl my-2 self-start pl-1 md:pl-0 pt-6"
          >
            Learning Style
          </h1>

          <div class="flex gap-4 w-full flex-col md:flex-row justify-center">
            <div
              class="rounded-lg shadow-lg max-w-md border-2 border-blue-eduwise p-6 text-gray-text"
            >
              <img :src="VisualIcon" alt="visual" class="w-24 h-24" />
              <p>
                Visual: Gaya belajar visual lebih menyukai informasi yang disampaikan melalui
                gambar, diagram, atau visualisasi lainnya. Orang dengan gaya belajar visual lebih
                mudah mengingat informasi yang dilihat daripada yang didengar.
              </p>
            </div>
            <div
              class="rounded-lg shadow-lg max-w-md border-2 border-blue-eduwise p-6 text-gray-text"
            >
              <img :src="EarIcon" alt="ear" class="w-24 h-24" />
              <p>
                Auditori: Gaya belajar auditori lebih menyukai informasi yang disampaikan secara
                lisan atau melalui pendengaran. Orang dengan gaya belajar auditori lebih mudah
                mengingat informasi yang didengar daripada yang dilihat
              </p>
            </div>
          </div>
          <div class="flex gap-4 my-4 w-full flex-col md:flex-row justify-center">
            <div
              class="rounded-lg shadow-lg max-w-md border-2 border-blue-eduwise pl-4 pt-6 text-gray-text"
            >
              <img :src="YogaIcon" alt="yoga" class="w-24 h-24" />
              <p>
                Kinestetik: Gaya belajar kinestetik lebih menyukai informasi yang disampaikan
                melalui kegiatan praktik atau melibatkan gerakan fisik. Orang dengan gaya belajar
                kinestetik lebih mudah mengingat informasi melalui pengalaman langsung.
              </p>
            </div>
            <div
              class="rounded-lg shadow-lg max-w-md border-2 border-blue-eduwise p-6 text-gray-text"
            >
              <img :src="ReadingIcon" alt="reading" class="w-24 h-24" />
              <p>
                Reading: Gaya belajar seseorang menyerap dan mengingat informasi melalui teks.
                Individu dengan gaya belajar ini lebih suka membaca, menulis, dan mengandalkan bahan
                bacaan untuk memahami materi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-blue-eduwise w-full py-3 md:py-4">
      <div class="container mx-auto text-center">
        <h2 class="text-white font-semibold text-lg">Build With Love</h2>
      </div>
    </footer>
  </div>
</template>
