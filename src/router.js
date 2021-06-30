import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/listings",
      name: "listings",
      component: () => import("./components/Listings")
    },
    {
      path: "/record/:id",
      name: "record-details",
      component: () => import("./components/RecordDetails")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddRecord")
    }
  ]
});