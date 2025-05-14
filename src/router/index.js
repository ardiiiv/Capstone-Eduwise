import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LearningStyle from '@/views/LearningStyle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
    },
    {
      path: '/home',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'loginpage',
      component: LoginPage,
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
  ],
})

export default router
