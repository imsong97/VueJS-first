import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter); // vue-router 사용 선언

// url 경로 설정
const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home}, // 기본 경로
        {path:"/about", component: About}
    ]
});

export default router;