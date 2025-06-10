<script setup>
import logoeduwise2 from '@/assets/logo-eduwise2.jpeg'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isNavOpen = ref(false)
const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}

const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  try {
    await axios.post(
      'http://localhost:4000/api/auth/register',
      {
        email: email.value,
        username: username.value,
        password: password.value,
      },
      {
        withCredentials: true,
      },
    )

    // Setelah register, redirect ke halaman login atau dashboard
    router.push('/')
  } catch (err) {
    error.value = err.response?.data?.message || 'Registrasi gagal. Coba lagi.'
  }
}
</script>

<template>
  <div class="flex flex-col bg-royal-blue min-h-screen">
    <main class="flex-grow flex items-center justify-center">
      <div
        class="bg-white rounded-lg overflow-hidden p-8 w-full max-w-md mx-4 shadow-none md:shadow-blue-200 md:shadow-lg"
      >
        <div class="flex justify-center mb-8">
          <img :src="logoeduwise2" alt="EduWise Logo" class="h-16" />
        </div>
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="text-gray-text">
            <label for="email" class="block mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              class="w-full border-2 rounded-lg focus:outline-none focus:ring-2 py-2 focus:ring-blue-eduwise px-4"
              placeholder="Masukan Email Anda"
              required
            />
          </div>
          <div class="text-gray-text">
            <label for="username" class="block mb-2">Username</label>
            <input
              v-model="username"
              type="text"
              name="username"
              id="username"
              class="border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise w-full py-2 px-4"
              placeholder="Masukan Username Anda"
              required
            />
          </div>
          <div class="text-gray-text">
            <label for="password" class="block">Password</label>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              class="border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise w-full px-4 py-2"
              placeholder="Masukan Password Anda"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-9 text-gray-500"
            ></button>
          </div>
          <div class="text-gray-text">
            <label for="password" class="block">Konfrimasi Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              class="border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-eduwise w-full px-4 py-2"
              placeholder="Masukan Password Anda"
              required
            />
          </div>
          <div class="flex justify-end space-x-4 pt-4">
            <button
              type="submit"
              class="bg-blue-eduwise text-white px-10 py-2 rounded-lg hover:bg-blue-700"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
