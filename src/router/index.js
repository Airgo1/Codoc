import Vue from 'vue'
import VueRouter from 'vue-router'

import Recherche from '../views/recherche.vue'
import Cohortes from '../views/cohortes.vue'
import Outils from '../views/outils.vue'
import Ecrf from '../views/ecrf.vue'
import Admin from '../views/admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Mes cohortes' }
  },
  {
    path: '/recherche',
    name: 'Mes Recherche',
    component: Recherche
  },
  {
    path: '/cohortes',
    name: 'Mes cohortes',
    component: Cohortes
  },
  {
    path: '/outis',
    name: 'outils',
    component: Outils
  },
  {
    path: '/ecrf',
    name: 'Mes eCRf',
    component: Ecrf
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
