import { createHashRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Blog from "./pages/Blog";
import ContactPage from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import { Component } from "react";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl text-red-500 mb-4">Something went wrong</h2>
          <p className="text-gray-300 mb-4 text-center">
            {this.state.error?.message || "Unknown error occurred"}
          </p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <ErrorPage />,
        },
        {
          path: "blog",
          element: <Blog />,
          errorElement: <ErrorPage />,
        },
        {
          path: "blog/:id",
          element: <BlogDetails />,
          errorElement: <ErrorPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <ErrorBoundary>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1f2937",
              color: "#fff",
            },
          }}
        />
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;