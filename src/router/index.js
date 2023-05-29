import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const requireAuth = (to, from, next) => {
  // Kiểm tra trạng thái đăng nhập ở đây (ví dụ: dùng vuex, localStorage, hoặc API request)
  const isAuthenticated = localStorage.getItem("username"); // Hãy thay đổi hàm này theo nhu cầu của bạn

  if (isAuthenticated !== null) {
    // Nế'u người dùng đã đăng nhập, cho phép truy cập vào trang card
    next();
  } else {
    alert("hãy đăng nhập");
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next("/login");
  }
};
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/product/:id",
    name: "product.detail",
    component: () => import("../views/ProducDetail.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
    beforeEnter: requireAuth, // Áp dụng navigation guard ở đây
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
