<script setup>
import NavBar from '@/ui/NavBar.vue'
import Profile from '@/assets/profile.png'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const profilePreview = ref(Profile)
const fileInput = ref(null)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    profilePreview.value = URL.createObjectURL(file)
  }
}

const handleLogout = () => {
  // (Tambahan opsional: hapus token/autentikasi dari localStorage kalau ada)
  localStorage.removeItem('accessToken')
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-bg">
    <NavBar />
    <!-- Main Content -->
    <main
      class="flex-grow flex items-center flex-col justify-center gap-6 mx-auto w-full md:max-w-5xl max-w-md mt-20 h-full"
    >
      <div class="flex md:flex-row flex-col gap-6 items-center w-full justify-center h-full">
        <div
          class="bg-white rounded-lg overflow-hidden w-full md:max-w-xl max-w-md p-6 md:p-7 shadow-royal-blue shadow-lg"
        >
          <div class="flex mb-8 flex-row gap-3">
            <img :src="profilePreview" alt="profile" class="h-16 w-16 rounded-full" />
            <div class="flex flex-col justify-center">
              <button
                @click="triggerFileInput"
                class="bg-royal-blue text-white px-3 py-1 rounded-lg"
              >
                Pilih Foto
              </button>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleFileChange"
                class="hidden"
              />
            </div>
          </div>

          <div class="flex flex-col gap-6 text-gray-text">
            <div class="flex flex-col gap-4">
              <div>
                <Label for="username">Username</Label>
                <input
                  type="text"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  placeholder="username"
                />
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  class="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex pt-4 justify-end">
              <button
                class="bg-royal-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 w-full max-w-xl items-center">
          <div
            class="bg-white w-full md:max-w-xl max-w-md flex h-96 flex-col rounded-lg shadow-royal-blue shadow-lg overflow-hidden md:mb-0 mb-6 overflow-y-scroll"
          >
            <div>
              <h2 class="font-semibold text-2xl text-royal-blue p-4">Riwayat Gaya Belajar</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex self-end">
        <div class="mb-10">
          <button
            @click="handleLogout"
            class="bg-royal-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Keluar
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-royal-blue w-full py-4 md:py-5">
      <div class="container mx-auto text-center">
        <h2 class="text-white text-base">
          © 2025 Eduwise Personalized Learning Style Detection | Team CC25-CF234
        </h2>
      </div>
    </footer>
  </div>
</template>
