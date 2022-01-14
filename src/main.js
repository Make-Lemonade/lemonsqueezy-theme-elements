import Vue from 'vue'
import App from './App.vue'

import LsElements from './lib';
Vue.use(LsElements);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
