import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Collection, Contact, Home, Layout } from "./index";
import ProductParamsPage from "../pages/product-params-page";
import Notfound from "../pages/notfound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <ProductParamsPage />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
