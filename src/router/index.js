import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LearningStyle from '@/views/LearningStyle.vue'
import QuizPage from '@/views/QuizPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import HasilPage from '@/views/HasilPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
    },
    {
      path: '/about',
      name: 'aboutpage',
      component: AboutPage,
    },
    {
      path: '/learningstyle',
      name: 'learningstyle',
      component: LearningStyle,
    },
    {
      path: '/quiz',
      name: 'quizpage',
      component: QuizPage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
    {
      path: '/hasilquiz',
      name: 'hasilpage',
      component: HasilPage,
    },
  ],
})

export default router
