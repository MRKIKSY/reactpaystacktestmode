import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const SubmissionForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [picture, setPicture] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("comment", comment);
    if (picture) formData.append("picture", picture);

    try {
      await axios.post("http://localhost:5000/api/submissions", formData);
      // Congratulatory message
      alert(
        "Congratulations! Your information has been captured successfully. You will be contacted by management shortly."
      );
      // Redirect to homepage after clicking OK
      navigate("/");
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Submission Form</h2>
          {/* Red imprint message */}
          <p className="text-center mb-4" style={{ color: "red", fontSize: "14px" }}>
            Thank you! Your payment is successful. Please fill this form so an admin from Nairaland can reconcile your payment details with your Nairaland username. Failure to do this might delay crediting your Nairaland advertising credits.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nairaland Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Buyer Full Name/Comment:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Picture (optional):</label>
              <input
                type="file"
                onChange={(e) => setPicture(e.target.files[0])}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          <div className="mt-3 text-center">
            <Link to="/submissions" className="text-decoration-none">
              View Submissions
            </Link>
          </div>
          <div className="mt-3 text-center">
            <Link to="/" className="btn btn-secondary w-100">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
