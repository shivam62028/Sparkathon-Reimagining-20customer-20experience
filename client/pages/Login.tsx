import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ThemeToggle } from "../components/ui/theme-toggle";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would call an API
    console.log("Login attempt:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Header with Theme Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Walmart Logo */}
        <div className="mb-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0071dc] to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-10 h-10 text-[#ffc220]" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#0071dc] dark:text-white">
                Walmart
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Save Money. Live Better.
              </p>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <Card className="w-full max-w-md shadow-xl border-0 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="space-y-1 text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email or Username
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 border-2 border-gray-200 focus:border-walmart-blue dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-200 focus:border-walmart-blue pr-12 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#0071dc] hover:bg-blue-700 text-white font-bold text-base rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign In
              </Button>
            </form>

            {/* Forgot Password Link */}
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-[#0071dc] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                onClick={() => console.log("Forgot password clicked")}
              >
                Forgot your password?
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                  New to Walmart?
                </span>
              </div>
            </div>

            {/* Create Account Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-2 border-[#0071dc] text-[#0071dc] hover:bg-[#0071dc] hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white font-semibold text-base rounded-md transition-all duration-200"
              onClick={() => console.log("Create account clicked")}
            >
              Create your account
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 max-w-md">
          <p>
            By continuing, you agree to Walmart's{" "}
            <a
              href="#"
              className="text-walmart-blue dark:text-blue-400 hover:underline"
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-walmart-blue dark:text-blue-400 hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
