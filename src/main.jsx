import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page404 } from "./components/pages/404";
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Protfolio";
import { Provider } from "react-redux";
import { Main } from "./layout/Main";
import store from "./redux/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { ResumePage } from "./components/pages/Resume";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolio/",
        element: <Portfolio />,
      },
      // {
      //   path: "services/",
      //   element: <Portfolio />,
      // },
      {
        path: "resume/",
        element: <ResumePage />,
      },
    ],
    errorElement: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AnimatePresence>
  </React.StrictMode>
);
