import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import CoreCrops from "./pages/Products/CoreCrops";
// import DryFruits from "./pages/Products/DryFruits";
import FreshFruits from "./pages/Products/FreshFruits";
import Services from "./pages/Services";
import Home from "./pages/home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: ContactUs,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "/products/core-crops",
    name: "coreCrops",
    component: CoreCrops,
    isPrivate: true,
    layout: "private",
  },
  // {
  //   path: "/products/dry-fruits",
  //   name: "dryFruits",
  //   component: DryFruits,
  //   isPrivate: true,
  //   layout: "private",
  // },
  {
    path: "/products/fresh-fruits",
    name: "freshFruits",
    component: FreshFruits,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "*",
    name: "Error",
    component: Home,
    isPrivate: false,
    layout: "private",
  },
];

export default routes;
