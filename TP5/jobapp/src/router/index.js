import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import AddJob from "../views/AddJob.vue";
import EditJob from "../views/EditJob.vue";
import JobDetail from "../views/JobDetail.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/add", component: AddJob },
  { path: "/jobs/:id", component: JobDetail, props: true },
  { path: "/edit/:id", component: EditJob, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
