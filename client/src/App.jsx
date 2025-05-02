import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/layout"; 
import Blog from "./pages/Blog";
import ContactPage from "./pages/Contact";

function App() {
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
          path: "blog",
          element: <Blog />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        // Add more pages here that should have the menu
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <div>
      <Toaster />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
    </div>
  );
}

export default App;
