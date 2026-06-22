function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 sm:p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-2xl font-bold">
            C
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
          Sign in to continue
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember
            </label>

            <a
              href="#"
              className="text-purple-600 font-medium"
            >
              Forgot?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-purple-600 text-white font-semibold active:scale-95 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Google Login */}
        <button className="w-full h-12 border rounded-xl font-medium hover:bg-gray-50">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-purple-600 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;