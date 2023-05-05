import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RecoveryView from '../views/RecoveryView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProfileView from '../views/ProfileView.vue'
import UsersView from '../views/UsersView.vue'
import UserTransactionView from '../views/user/UserTransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/recovery',
      name: 'RecoveryView',
      component: RecoveryView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/users',
      name: 'UsersView',
      component: UsersView
    },
    {
      path: '/user/transaction',
      name: 'UserTransactionView',
      component: UserTransactionView
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    },
  ]
})

export default router
