import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';
import SingleProject from './pages/SingleProject.vue';
import AppContact from './pages/AppContact.vue';





const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AppAbout,
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: SingleProject,
    },
    {
      path: '/contact',
      name: 'contact',
      component: AppContact,
    },
    
  ],

});

export { router };