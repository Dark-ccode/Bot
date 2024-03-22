import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.min.css'


import 'animate.css'


import HomePage from './components/HomePage.vue'
// import Login from './components/Login.vue'
import Chat from './components/Chat.vue'
// import Profile from './components/Profile.vue'

const routes =[
// {path:'/Profile',component:Profile},
{path:'/',component:HomePage},
// {path:'/',component:Login},
{path:'/Chat',component:Chat}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router).mount("#app");
