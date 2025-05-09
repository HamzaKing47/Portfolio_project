import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-300 mb-4 text-center">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;