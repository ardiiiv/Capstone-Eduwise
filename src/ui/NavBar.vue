<script setup>
import logoeduwise2 from '@/assets/logo-eduwise2.jpeg'
import profile from '@/assets/profile.png'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isNavOpen = ref(false)
const isLoginDialogOpen = ref(false)
const showPassword = ref(false)

const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}

const openLoginDialog = () => {
  isLoginDialogOpen.value = true
}

const closeLoginDialog = () => {
  isLoginDialogOpen.value = false
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const email = ref('')
const password = ref('')
const error = ref('')
const isLoggedIn = ref(false)

const router = useRouter()

onMounted(() => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    isLoggedIn.value = true
  }
})

const handleLogin = async () => {
  error.value = ''
  try {
    const response = await axios.post(
      'http://localhost:4000/api/auth/login',
      { email: email.value, password: password.value },
      { withCredentials: true },
    )

    const accessToken = response.data.accessToken
    localStorage.setItem('accessToken', accessToken)

    isLoggedIn.value = true
    closeLoginDialog()
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login gagal, silakan coba lagi'
  }
}
</script>

<template>
  <header class="bg-royal-blue flex justify-center py-4 md:py-5 fixed z-10 w-full">
    <div class="flex container justify-between items-center px-2 md:px-2 relative">
      <h1 class="text-white text-xl md:text-2xl font-bold">EduWise</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex flex-row gap-6 items-center">
        <router-link
          to="/"
          class="text-white text-base hover:font-semibold hover:scale-110 hover:duration-200 hover:relative transition"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="text-white text-base hover:font-semibold hover:scale-110 hover:duration-200 hover:relative transition"
          >About</router-link
        >
        <router-link
          to="/learningstyle"
          class="text-white text-base hover:font-semibold hover:scale-110 hover:duration-200 hover:relative transition"
          >Learning Style</router-link
        >
        <div class="flex gap-2 md:flex-row flex-col">
          <template v-if="!isLoggedIn">
            <button
              @click="openLoginDialog"
              class="bg-white px-5 py-1 text-base font-semibold rounded-xl shadow-lg text-royal-blue hover:bg-blue-50 text-center transition"
            >
              Masuk
            </button>
            <router-link
              to="/signup"
              class="bg-royal-blue px-5 py-1 text-base rounded-xl shadow-lg text-white hover:bg-blue-700 text-center transition border-2 border-white font-semibold"
              >Daftar</router-link
            >
          </template>
          <router-link to="/profile" v-else>
            <img
              :src="profile"
              alt="Profile"
              class="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
            />
          </router-link>
        </div>
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

      <!-- Mobile Overlay -->
      <div
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
        :class="isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
        @click="toggleButton"
      ></div>

      <!-- Mobile Navigation -->
      <div
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
        :class="isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
        @click="toggleButton"
      ></div>

      <nav
        class="md:hidden fixed top-0 right-0 h-full w-64 bg-royal-blue flex flex-col items-center pt-20 gap-4 z-10 transition-transform duration-300"
        :class="isNavOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <router-link
          to="/"
          class="text-white text-base hover:font-semibold transition"
          @click="toggleButton"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="text-white text-base hover:font-semibold transition"
          @click="toggleButton"
          >About</router-link
        >
        <router-link
          to="/learningstyle"
          class="text-white text-base hover:font-semibold transition"
          @click="toggleButton"
          >Learning Style</router-link
        >
        <div class="flex gap-2 md:flex-row flex-col">
          <template v-if="!isLoggedIn">
            <button
              @click="
                () => {
                  toggleButton()
                  openLoginDialog()
                }
              "
              class="bg-white px-5 py-1 text-sm md:text-base font-semibold rounded-xl shadow-lg text-royal-blue hover:bg-blue-50 text-center transition"
            >
              Masuk
            </button>
            <router-link
              to="/signup"
              class="bg-royal-blue px-5 py-1 text-sm md:text-base rounded-xl shadow-lg text-white hover:bg-blue-700 text-center transition border-2 border-white font-semibold"
            >
              Daftar
            </router-link>
          </template>
          <template v-else>
            <img
              :src="profile"
              alt="Profile"
              class="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
            />
          </template>
        </div>
      </nav>
    </div>
  </header>
  <div
    v-if="isLoginDialogOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="closeLoginDialog"
  >
    <div
      class="bg-white rounded-lg overflow-hidden w-full max-w-md mx-auto p-8 md:p-10 shadow-lg shadow-royal-blue"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-royal-blue">Masuk</h2>
        <button @click="closeLoginDialog" class="text-gray-500 hover:text-black text-xl">
          &times;
        </button>
      </div>

      <div class="flex justify-center mb-6">
        <img :src="logoeduwise2" alt="EduWise Logo" class="h-16" />
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-text mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise"
            placeholder="Masukkan Email Anda"
            required
          />
        </div>

        <div>
          <label class="block text-gray-text mb-2">Password</label>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise"
            placeholder="Masukkan password Anda"
            required
          />
          <button
            type="button"
            @click="togglePassword"
            class="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
          >
            <svg
              v-if="showPassword"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.065.168-2.088.475-3.047m2.078-2.455A9.96 9.96 0 0112 3c5.523 0 10 4.477 10 10 0 1.172-.202 2.296-.574 3.334M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.065.168-2.088.475-3.047m2.078-2.455A9.96 9.96 0 0112 3c5.523 0 10 4.477 10 10 0 1.172-.202 2.296-.574 3.334M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3l18 18"
              />
            </svg>
          </button>
          <div class="my-1">
            <button class="text-royal-blue text-sm">Lupa Password?</button>
          </div>
        </div>

        <div class="flex justify-between space-x-4 pt-4">
          <router-link
            to="/signup"
            class="border border-blue-eduwise text-blue-eduwise px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors flex-1 text-center"
          >
            Sign Up
          </router-link>
          <button
            type="submit"
            class="bg-blue-eduwise text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
          >
            Log In
          </button>
        </div>
        <div class="text-center text-sm text-gray-text">
          Belum punya akun?
          <router-link to="/signup" class="text-blue-eduwise hover:underline">Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
