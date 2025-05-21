<script setup>
import Profile from '@/assets/profile.png'
import albertEinstein from '@/assets/albert-einstein.jpg'
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

    <main class="flex-1 overflow-auto h-screen pt-16">
      <div
        class="bg-white max-w-md md:max-w-screen-lg mx-auto h-full flex items-center shadow-none md:shadow-blue-200 md:shadow-2xl"
      >
        <div class="rounded-lg flex flex-col md:flex-row w-full items-center p-6 h-fit md:full">
          <div class="flex flex-col mx-7 justify-center md:w-1/2">
            <h1 class="text-blue-eduwise text-2xl md:text-3xl font-bold mb-4">
              Selamat Datang di EduWise
            </h1>
            <p class="text-gray-text text-base md:text-lg md:text-justify mb-6">
              Temukan cara belajar yang sesuai dengan gaya dan kebutuhan Anda bersama Eduwise untuk
              mencapai tujuan Anda.
            </p>
            <div class="flex justify-end gap-4">
              <router-link
                to="/home"
                class="bg-blue-eduwise px-4 py-2 text-sm md:text-base rounded-lg shadow-lg text-white hover:bg-blue-700 text-center transition"
              >
                Get Started
              </router-link>
              <router-link
                to="/login"
                class="border-2 border-blue-eduwise px-8 py-2 rounded-lg text-blue-eduwise text-sm md:text-base text-center hover:bg-blue-50 transition"
                >Log In</router-link
              >
            </div>
          </div>
          <div class="max-w-xs md:max-w-sm mx-7 md:w-1/2 mt-6 md:mt-0">
            <img :src="albertEinstein" alt="Albert Einstein" class="rounded-lg shadow-lg w-full" />
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
