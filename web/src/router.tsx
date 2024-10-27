import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Account, Home, Doctors, Services } from "./pages";
import ProtectedRoute from "./components/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/medicos",
    element: <ProtectedRoute element={<Doctors />} />,
  },
  {
    path: "/servicos",
    element: <ProtectedRoute element={<Services />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Account />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
