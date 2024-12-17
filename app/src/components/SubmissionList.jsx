import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("You must log in as an admin!");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/submissions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubmissions(response.data);
      } catch (error) {
        alert("Unauthorized or session expired!");
        localStorage.removeItem("adminToken");
        navigate("/login");
      }
    };

    fetchSubmissions();
  }, [navigate]);

  return (
    <div className="container p-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Submission List</h2>
          <ul className="list-group">
            {submissions.map((submission) => (
              <li key={submission._id} className="list-group-item">
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Nairaland Username:</strong> {submission.username}</p>
                <p><strong>Comment:</strong> {submission.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubmissionList;
