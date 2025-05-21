<script setup>
import logoeduwise2 from '@/assets/logo-eduwise2.jpeg'
import Profile from '@/assets/profile.png'
import { ref } from 'vue'

const isNavOpen = ref(false)
const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gray-bg md:bg-gradient-to-b md:from-blue-gradient md:from-0% md:to-dark-gradient md:to-100%"
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
            href="/about"
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

    <!-- Main Content -->
    <main class="flex-grow flex items-center justify-center pt-8 md:pt-16 px-4">
      <div
        class="bg-white rounded-lg overflow-hidden w-full max-w-md mx-auto p-8 md:p-10 shadow-none md:shadow-blue-200 md:shadow-lg"
      >
        <div class="flex justify-center mb-8">
          <img :src="logoeduwise2" alt="EduWise Logo" class="h-16" />
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-gray-text mb-2">Username</label>
            <input
              type="text"
              class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise"
              placeholder="Masukkan username Anda"
              required
            />
          </div>

          <div>
            <label class="block text-gray-text mb-2">Password</label>
            <input
              type="password"
              class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise"
              placeholder="Masukkan password Anda"
              required
            />
          </div>

          <div class="text-center text-sm text-gray-text">
            Belum punya akun?
            <a href="#" class="text-blue-eduwise hover:underline">Sign Up</a>
          </div>

          <div class="flex justify-between space-x-4 pt-4">
            <button
              class="bg-blue-eduwise text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
            >
              Log In
            </button>
            <router-link
              to="/signup"
              class="border border-blue-eduwise text-blue-eduwise px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors flex-1 text-center"
            >
              Sign Up
            </router-link>
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
