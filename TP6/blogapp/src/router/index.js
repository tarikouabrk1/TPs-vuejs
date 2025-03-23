import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeVi.vue";
import CreatePostView from "../views/CreatePostView.vue";
import PostDetailView from "../views/PostDetailView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/create",
    component: CreatePostView,
  },
  {
    path: "/posts/:id",
    component: PostDetailView,
    name: "PostDetail",
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  // Nouvelle route pour le filtrage par tags
  {
    path: "/tags/:tag",
    name: "TagFilter",
    component: Home,
    props: true, // Passe le paramètre 'tag' comme prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
