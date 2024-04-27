import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "*",
          element: <Index />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
