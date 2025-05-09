import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-red-500 mb-4">Oops!</h1>
      <p className="text-gray-300 mb-4 text-center">
        {error.statusText || error.message}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-colors"
      >
        Reload Page
      </button>
    </div>
  );
};

export default ErrorPage;