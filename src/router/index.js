import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LearningStyle from '@/views/LearningStyle.vue'
import QuizPage from '@/views/QuizPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import QuizPage2 from '@/views/QuizPage2.vue'
import QuizPage3 from '@/views/QuizPage3.vue'
import QuizPage4 from '@/views/QuizPage4.vue'
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
      path: '/quiz2',
      name: 'quizpage2',
      component: QuizPage2,
    },
    {
      path: '/quiz3',
      name: 'quizpage3',
      component: QuizPage3,
    },
    {
      path: '/quiz4',
      name: 'quizpage4',
      component: QuizPage4,
    },
    {
      path: '/hasilquiz',
      name: 'hasilpage',
      component: HasilPage,
    },
  ],
})

export default router
