import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SubmissionForm from "./components/SubmissionForm";
import SubmissionList from "./components/SubmissionList";
import AdminLogin from "./components/AdminLogin";
import PaystackPayment from "./components/PaystackPayment";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="text-center my-5">
          <h1 className="display-4 text-primary">Nairaland Advertising Credit Buying System</h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h2>Welcome to the System</h2>
                <Link to="/submission" className="btn btn-primary m-2">
                  Submission Form
                </Link>
                <Link to="/login" className="btn btn-secondary m-2">
                  Admin Login
                </Link>
                <Link to="/payment" className="btn btn-success m-2">
                  Payment Page
                </Link>
              </div>
            }
          />
          <Route path="/submission" element={<SubmissionForm />} />
          <Route path="/submissions" element={<SubmissionList />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/payment" element={<PaystackPayment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
