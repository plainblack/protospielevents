import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttendingView from "../views/AttendingView.vue";
import OrganizingView from "../views/OrganizingView.vue";
import MarketingView from "../views/MarketingView.vue";
import UpcomingEventsView from "../views/UpcomingEventsView.vue";
import BingoView from "../views/BingoView.vue";
import PoliciesView from "../views/PoliciesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/attending",
    name: "attending",
    component: AttendingView,
    // route level code-splitting
    // this generates a separate chunk (attending.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//    component: () =>
  //    import(/* webpackChunkName: "attending" */ "../views/AttendingView.vue"),
  },
  {
    path: "/organizing",
    name: "organizing",
    component: OrganizingView,
  },
  {
    path: "/marketing",
    name: "marketing",
    component: MarketingView,
  },
  {
    path: "/upcoming-events",
    name: "upcomingevents",
    component: UpcomingEventsView,
  },
  {
    path: "/policies",
    name: "policies",
    component: PoliciesView,
  },
  {
    path: "/bingo",
    name: "bingo",
    component: BingoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
