import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(Ionic)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')