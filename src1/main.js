import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
//import router from 'vue-router/dist/vue-router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false

import 'animate.css'


import HomePage from './components/HomePage.vue'
import Login from './components/Login.vue'
import Chat from './components/Chat.vue'
import Profile from './components/Profile.vue'

const routes =[
{path:'/Profile',component:Profile},
{path:'/Home',component:HomePage},
{path:'/',component:Login},
{path:'/Chat',component:Chat}

]

const router = new VueRouter({routes})





new Vue({
router,
render: h => h(App),
}).$mount('#app')
