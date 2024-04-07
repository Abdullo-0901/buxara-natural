import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Collection, Contact, Home, Layout } from "./index";
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
        path: "colection",
        element: <Collection />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
