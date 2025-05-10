import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../schemas";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import API_URL from "../config";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, actions) => {
        try {
          const response = await axios.post(`${API_URL}/user`, values);
          if (response.data?.success) {
            toast.success("User registered successfully!");
            navigate("/login");
          } else {
            toast.error(response.data?.message || "Registration failed. Please try again.");
          }
        } catch (error) {
          console.error("Registration error:", error);
          toast.error(error.response?.data?.message || "Registration failed. Please try again.");
        }
        actions.resetForm();
      },
    });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img 
            alt="Tech Ex" 
            src="/screen.png" 
            className="mx-auto h-20 w-auto mb-6 rounded-lg "
          />
          <h2 className="text-3xl font-bold tracking-tight">
            Create New Account
          </h2>
          <p className="mt-2 text-gray-400">
            Join our community to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white transition-colors duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-400">Already registered? </span>
          <Link
            to="/login"
            className="font-medium text-green-500 hover:text-green-400 transition-colors"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;