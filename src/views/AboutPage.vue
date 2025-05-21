<script setup>
import Profile from '@/assets/profile.png'
import logoEduwise from '@/assets/logo-eduwise.jpeg'
import ardiViraPakca from '@/assets/ardi-vira-pakca.jpg'
import { ref } from 'vue'
import router from '@/router'

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
          <a href="" class="text-white text-lg hover:font-semibold transition" @click="toggleButton"
            >Learning Style</a
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

    <main class="flex-1 overflow-auto pt-16">
      <div
        class="bg-white max-w-md md:max-w-screen-lg mx-auto flex justify-center shadow-none md:shadow-blue-200 md:shadow-2xl"
      >
        <div class="rounded-lg flex flex-col w-full p-6 items-center max-w-4xl">
          <div class="flex flex-col">
            <div>
              <img :src="logoEduwise" alt="logo-eduwise" class="w-32 h-32 md:w-72 md:h-72" />
            </div>
          </div>
          <div>
            <p class="text-gray-text text-base md:text-lg md:text-center mb-6">
              EduWise bertujuan untuk membantu individu mendapatkan pengalaman belajar yang lebih
              efektif dan efisien melalui sistem deteksi pembelajaran personal. Dengan memanfaatkan
              data dari aktivitas belajar, EduWise dapat merekomendasikan metode belajar yang paling
              sesuai dengan kebutuhan masing-masing individu.
            </p>
          </div>
          <div>
            <h1 class="font-semibold text-xl md:text-2xl text-blue-eduwise">Tim Pengembang</h1>
            <p class="text-gray-text text-base md:text-lg">
              Aplikasi EduWise dikembangkan oleh tim kolaboratif dari peserta coding camp yang
              memiliki semangat dalam dunia pendidikan dan teknologi:
            </p>
          </div>
          <div class="h-56">
            <div
              class="flex gap-4 py-5 overflow-y-scroll flex-col mt-4 h-full bg-white shadow-lg shadow-blue-200 rounded-lg max-screen-lg mx-auto overflow-hidden"
            >
              <div class="flex md:gap-10 gap-10 flex-row px-2">
                <div class="flex flex-col items-center">
                  <div class="group">
                    <img
                      :src="ardiViraPakca"
                      alt="Ardi Vira Pakca"
                      class="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                    />
                  </div>
                  <p>Ardi Vira Pakca</p>
                  <p>Fullstack</p>
                  <p>Universitas Sahid Surakarta</p>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    :src="ardiViraPakca"
                    alt="Ardi Vira Pakca"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                  />
                  <p>Aditya Imam Ramadhan</p>
                  <p>Fullstack</p>
                  <p>Universitas Sahid Surakarta</p>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    :src="ardiViraPakca"
                    alt="Ardi Vira Pakca"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                  />
                  <p>Mukhlis Al Hakim</p>
                  <p>Fullstack</p>
                  <p>Universitas Sahid Surakarta</p>
                </div>
              </div>
              <div class="flex gap-10 md:gap-5 flex-row px-2">
                <div class="flex flex-col items-center">
                  <img
                    :src="ardiViraPakca"
                    alt="Ardi Vira Pakca"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                  />
                  <p>Anna Stefanie Ruitan</p>
                  <p>Machine Learning</p>
                  <p>Universitas Sam Ratulangi</p>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    :src="ardiViraPakca"
                    alt="Ardi Vira Pakca"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                  />
                  <p>Carmen Emanuela Dwiva Lisapaly</p>
                  <p>Machine Learning</p>
                  <p>Universitas Sam Ratulangi</p>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    :src="ardiViraPakca"
                    alt="Ardi Vira Pakca"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                  />
                  <p class="">Muhammad Haeqal Salehudin</p>
                  <p>Machine Learning</p>
                  <p>Universitas Sriwijaya</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-10">
            <h1 class="font-semibold text-xl md:text-2xl text-blue-eduwise">Latar Belakang</h1>
            <p class="text-gray-text text-base md:text-lg">
              Setiap siswa memiliki gaya dan kecepatan belajar yang berbeda-beda. Namun, sistem
              pembelajaran konvensional cenderung menerapkan pendekatan yang sama untuk semua siswa.
              Hal ini menyebabkan sebagian siswa kesulitan mengikuti materi dan tidak mencapai hasil
              belajar yang optimal. EduWise hadir sebagai solusi inovatif yang memanfaatkan
              teknologi untuk menganalisis pola belajar siswa dan memberikan pembelajaran yang
              dipersonalisasi agar setiap siswa dapat berkembang sesuai dengan potensinya.
            </p>
          </div>
          <div class="flex flex-col mt-8">
            <h1 class="font-semibold text-xl md:text-2xl text-blue-eduwise">
              Dapat Diakses Tapna Log In
            </h1>
            <p class="text-gray-text text-base md:text-lg">
              Untuk memudahkan akses dan uji coba, EduWise dapat digunakan tanpa login. Pengguna
              dapat langsung mengakses fitur utama aplikasi dan merasakan manfaat pembelajaran
              personal secara instan. Namun, untuk menyimpan riwayat dan rekomendasi yang lebih
              spesifik, pengguna tetap disarankan untuk membuat akun.
            </p>
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
