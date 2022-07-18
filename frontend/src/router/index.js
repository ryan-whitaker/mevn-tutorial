import { createRouter, createWebHashHistory } from 'vue-router';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';
import SurveyList from '../components/surveys/SurveyList';
import SurveyForm from '../components/forms/SurveyForm'

import store from '../store/index.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginForm,
      meta: { requiresUnauth: true }
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignupForm,
      meta: { requiresUnauth: true }
    },
    {
      path: '/surveys',
      name: 'Surveys',
      component: SurveyList,
      meta: { requiresAuth: true }
    },
    { 
      path: '/', 
      redirect: '/surveys' 
    },
    { 
      path: '/new',
      component: SurveyForm,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/surveys');
  } else {
    next();
  }
})

export default router
