import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { lazy, Suspense } from "react";
import LottieHandler from "src/feedback/lottieHandler/lottieHandler";
import SuspenseFallback from "src/feedback/suspenseFallback/SuspenseFallback";
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Error = lazy(() => import("@pages/Error"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseFallback>
        <MainLayout />
      </SuspenseFallback>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading Please Wait...">
            <Home />{" "}
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <SuspenseFallback>
            <Cart />
          </SuspenseFallback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <SuspenseFallback>
            <Wishlist />
          </SuspenseFallback>
        ),
      },
      {
        path: "categories",
        element: (
          <SuspenseFallback>
            <Categories />
          </SuspenseFallback>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              status: 400,
              statusText: "Category Not Found",
            });
          }
          return true;
        },
      },

      {
        path: "about-us",
        element: (
          <SuspenseFallback>
            <AboutUs />
          </SuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <SuspenseFallback>
            <Login />
          </SuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <SuspenseFallback>
            <Register />
          </SuspenseFallback>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
