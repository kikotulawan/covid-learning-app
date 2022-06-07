import Vue from 'vue';
import vuetify from './plugins/vuetify'
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import Vue2TouchEvents from 'vue2-touch-events'
import VueConfetti from 'vue-confetti'

import './assets/css/style.css';
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-toastification/dist/index.css';
import 'boxicons/css/boxicons.min.css'
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueConfetti)
Vue.use(Toast, {
    position: 'bottom-left',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false,
    maxToasts: 1,
    transition: 'Vue-Toastification__fade',
    newestOnTop: true,
    filterBeforeCreate: (toast, toasts) => {
        if (toasts.filter(
            t => t.type === toast.type
            ).length !== 0) {
                return false;
            }
            return toast;
        }
    });

    Vue.use(Vue2TouchEvents)
    
    Vue.config.productionTip = false;

    new Vue({
    router,
    vuetify,
    render: (h) => h(App)
}).$mount('#app');