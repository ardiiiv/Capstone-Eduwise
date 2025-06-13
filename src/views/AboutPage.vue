<script setup>
import logoEduwise from '@/assets/logo-eduwise.jpeg'
import imam from '@/assets/imam.svg'
import ardi from '@/assets/ardi.svg'
import mukhlis from '@/assets/mukhlis.svg'
import carmen from '@/assets/carmen.svg'
import anna from '@/assets/anna.svg'
import haeqal from '@/assets/haeqal.svg'
import NavBar from '@/ui/NavBar.vue'
import { ref } from 'vue'
import router from '@/router'

const isNavOpen = ref(false)
const toggleButton = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <div class="bg-white flex flex-col h-screen w-screen overflow-hidden">
    <NavBar />
    <main class="flex-1 overflow-auto pt-16">
      <div
        class="bg-white max-w-md md:max-w-screen-lg mx-auto flex justify-center shadow-none md:shadow-royal-blue md:shadow-2xl"
      >
        <div class="rounded-lg flex flex-col w-full p-6 items-center max-w-4xl">
          <div class="flex flex-col">
            <div>
              <img :src="logoEduwise" alt="logo-eduwise" class="w-40 h-40 md:w-72 md:h-72" />
            </div>
          </div>
          <div>
            <p class="text-gray-text text-base md:text-center mb-6">
              EduWise bertujuan untuk membantu individu mendapatkan pengalaman belajar yang lebih
              efektif dan efisien melalui sistem deteksi pembelajaran personal. Dengan memanfaatkan
              data dari aktivitas belajar, EduWise dapat merekomendasikan metode belajar yang paling
              sesuai dengan kebutuhan masing-masing individu.
            </p>
          </div>
          <div>
            <h2 class="font-semibold text-2xl text-royal-blue">Tim Pengembang</h2>
            <p class="text-gray-text text-base">
              Aplikasi EduWise dikembangkan oleh tim kolaboratif dari peserta coding camp yang
              memiliki semangat dalam dunia pendidikan dan teknologi:
            </p>
          </div>
          <div class="h-56">
            <div
              class="flex gap-4 py-5 overflow-y-scroll flex-col mt-4 h-full bg-white shadow-lg shadow-royal-blue rounded-lg max-screen-lg mx-auto overflow-hidden"
            >
              <div class="flex md:gap-10 gap-10 flex-row px-2">
                <div class="flex flex-col items-center text-gray-text text-sm">
                  <div class="group">
                    <img
                      :src="ardi"
                      alt="ardi"
                      class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />
                  </div>
                  <p>Ardi Vira Pakca</p>
                  <p>Fullstack</p>
                  <p>Universitas Sahid Surakarta</p>
                </div>
                <div class="flex flex-col items-center text-gray-text text-sm">
                  <img
                    :src="imam"
                    alt="imam"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <p>Aditya Imam Ramadhan</p>
                  <p>Fullstack</p>
                  <p>Universitas Sahid Surakarta</p>
                </div>
                <div class="flex flex-col items-center text-gray-text text-sm">
                  <img
                    :src="mukhlis"
                    alt="mukhlis"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <p>Mukhlis Al Hakim</p>
                  <p>Fullstack</p>
                  <p>Universitas Sahid Surakarta</p>
                </div>
              </div>
              <div class="flex gap-10 md:gap-5 flex-row px-2 text-gray-text text-sm">
                <div class="flex flex-col items-center">
                  <img
                    :src="anna"
                    alt="anna"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <p>Anna Stefanie Ruitan</p>
                  <p>Machine Learning</p>
                  <p>Universitas Sam Ratulangi</p>
                </div>
                <div class="flex flex-col items-center text-gray-text text-sm">
                  <img
                    :src="carmen"
                    alt="carmen"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <p>Carmen Emanuela Dwiva Lisapaly</p>
                  <p>Machine Learning</p>
                  <p>Universitas Sam Ratulangi</p>
                </div>
                <div class="flex flex-col items-center text-gray-text text-sm">
                  <img
                    :src="haeqal"
                    alt="haeqal"
                    class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <p class="">Muhammad Haeqal Salehudin</p>
                  <p>Machine Learning</p>
                  <p>Universitas Sriwijaya</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-10">
            <h2 class="font-semibold text-2xl text-royal-blue">Latar Belakang</h2>
            <p class="text-gray-text text-base">
              Setiap siswa memiliki gaya dan kecepatan belajar yang berbeda-beda. Namun, sistem
              pembelajaran konvensional cenderung menerapkan pendekatan yang sama untuk semua siswa.
              Hal ini menyebabkan sebagian siswa kesulitan mengikuti materi dan tidak mencapai hasil
              belajar yang optimal. EduWise hadir sebagai solusi inovatif yang memanfaatkan
              teknologi untuk menganalisis pola belajar siswa dan memberikan pembelajaran yang
              dipersonalisasi agar setiap siswa dapat berkembang sesuai dengan potensinya.
            </p>
          </div>
          <div class="flex flex-col mt-8">
            <h2 class="font-semibold text-2xl text-royal-blue">Dapat Diakses Tanpa Log In</h2>
            <p class="text-gray-text text-base">
              Untuk memudahkan akses dan uji coba, EduWise dapat digunakan tanpa login. Pengguna
              dapat langsung mengakses fitur utama aplikasi dan merasakan manfaat pembelajaran
              personal secara instan. Namun, untuk menyimpan riwayat dan rekomendasi yang lebih
              spesifik, pengguna tetap disarankan untuk membuat akun.
            </p>
          </div>
        </div>
      </div>
      <footer class="bg-royal-blue w-full py-4 md:py-5">
        <div class="container mx-auto text-center">
          <h2 class="text-white text-base">
            © 2025 Eduwise Personalized Learning Style Detection | Team CC25-CF234
          </h2>
        </div>
      </footer>
    </main>
  </div>
</template>
