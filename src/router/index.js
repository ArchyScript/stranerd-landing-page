import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'

const Home = () =>
    import ('@/components/Home/Main.vue')
const Study = () =>
    import ('@/components/Study/Main.vue')
const Wallet = () =>
    import ('@/components/Wallet/Main.vue')
const Schedules = () =>
    import ('@/components/Schedules/Main.vue')
const Questions = () =>
    import ('@/components/Questions/Main.vue')
const Tutors = () =>
    import ('@/components/Tutors/Main.vue')

Vue.use(IonicVueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/questions',
        name: 'Questions',
        component: Questions,
    },
    {
        path: '/study',
        name: 'Study',
        component: Study,
    },
    {
        path: '/tutors',
        name: 'Tutors',
        component: Tutors,
    },
    {
        path: '/schedules',
        name: 'Schedules',
        component: Schedules,
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: Wallet,
    },
]

const router = new IonicVueRouter({
    mode: 'history',
    routes,
})

export default router