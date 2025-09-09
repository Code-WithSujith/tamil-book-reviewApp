import React, { useState } from "react";
import { X, Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export function Login({onClose}) {
  const [isOpen, setIsOpen] = useState(true); // keep true for demo
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Sign up data:", formData);
      alert("Sign up successful!");
    } else {
      console.log("Sign in data:", {
        email: formData.email,
        password: formData.password,
      });
      alert("Sign in successful!");
    }
    setIsOpen(false);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center p-3 z-3">
      <div className="bg-white rounded-4 shadow-lg w-100" style={{ maxWidth: "420px", position: "relative" }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle p-1"
        >
          <X size={20} className="text-secondary" />
        </button>

        {/* Header */}
        <div
          className="p-4 text-white text-center bg-danger"
          // style={{
          //   background: "linear-gradient(to right, #7e22ce, #2563eb)", // purple → blue
          // }}
        >
          <h2 className="h4 fw-bold mb-1">{isSignUp ? "Create Account" : "Welcome Back"}</h2>
          <p className="mb-0 small">{isSignUp ? "Join us today!" : "Sign in to your account"}</p>
        </div>

        {/* Form */}
        <div className="p-4">
          {isSignUp && (
            <div className="row g-3 mb-3">
              <div className="col-6 position-relative">
                <User size={18} className="position-absolute top-50 start-0 ms-3 translate-middle-y text-secondary" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-control ps-5"
                  required={isSignUp}
                />
              </div>
              <div className="col-6 position-relative">
                <User size={18} className="position-absolute top-50 start-0 ms-3 translate-middle-y text-secondary" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-control ps-5"
                  required={isSignUp}
                />
              </div>
            </div>
          )}

          <div className="mb-3 position-relative">
            <Mail size={18} className="position-absolute top-50 start-0 ms-3 translate-middle-y text-secondary" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control ps-5"
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <Lock size={18} className="position-absolute top-50 start-0 ms-3 translate-middle-y text-secondary" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control ps-5 pe-5"
              required
            />
            <button
              type="button"
              className="btn position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {isSignUp && (
            <div className="mb-3 position-relative">
              <Lock size={18} className="position-absolute top-50 start-0 ms-3 translate-middle-y text-secondary" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-control ps-5 pe-5"
                required={isSignUp}
              />
              <button
                type="button"
                className="btn position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          )}

          {!isSignUp && (
            <div className="text-end mb-3">
              <button
                type="button"
                className="btn btn-link p-0 small text-decoration-none text-primary"
                onClick={() => alert("Forgot password functionality")}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="btn w-100 text-white fw-semibold py-2 bg-danger"
            // style={{
            //   background: "linear-gradient(to right, #7e22ce, #2563eb)",
            // }}
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>

          <div className="text-center mt-3 border-top pt-3">
            <span className="text-muted small">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button
              type="button"
              onClick={toggleMode}
              className="btn btn-link ms-1 p-0 small fw-bold text-primary"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>

        {/* Social login */}
        <div className="px-4 pb-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="flex-grow-1 border-top"></div>
            <span className="px-2 small text-muted">or continue with</span>
            <div className="flex-grow-1 border-top"></div>
          </div>
          <div className="d-flex gap-3">
            <button
              className="btn flex-fill border bg-white"
              onClick={() => alert("Google sign in functionality")}
            >
              <span className="small fw-medium">Google</span>
            </button>
            <button
              className="btn flex-fill border bg-white"
              onClick={() => alert("Facebook sign in functionality")}
            >
              <span className="small fw-medium">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
