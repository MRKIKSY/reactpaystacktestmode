import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", {
        username,
        password,
      });
      localStorage.setItem("adminToken", response.data.token);
      alert("Login successful!");
      navigate("/submissions");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  const goToHomepage = () => {
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Login
            </button>
          </form>
          {/* Button to redirect to the homepage */}
          <button onClick={goToHomepage} className="btn btn-secondary w-100">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
