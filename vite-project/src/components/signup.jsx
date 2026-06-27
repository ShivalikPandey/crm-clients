function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <div className="mx-auto w-full max-w-sm px-5 py-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            C
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Start managing your CRM today
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-14 px-4 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-14 px-4 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full h-14 px-4 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Create Password"
            className="w-full h-14 px-4 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Terms */}
          <p className="text-xs text-center text-gray-500 leading-relaxed">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full h-14 rounded-2xl bg-purple-600 text-white font-semibold text-lg shadow-lg hover:bg-purple-700 active:scale-95 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Google Button */}
        <button className="w-full h-14 rounded-2xl border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50 transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold text-purple-600 hover:text-purple-700"
          >
            Sign In
          </a>
        </p>

      </div>
    </div>
  );
}

export default Signup;