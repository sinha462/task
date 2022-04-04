import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Patient from "./Patient.js";
import Overview from "./Overview.js";
import Calendar from "./Calendar.js";
import Messages from "./Messages.js";
import PaymentInformation from "./PaymentInformation.js";
import Settings from "./Settings.js";
import "./App.css";
import PatientList from "./PatientList.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Patient />}></Route>
            <Route exact path="/overview" element={<Overview />}></Route>
            <Route exact path="/calendar" element={<Calendar />}></Route>
            <Route exact path="/messages" element={<Messages />}></Route>
            <Route
              exact
              path="/payment_information"
              element={<PaymentInformation />}
            ></Route>
            <Route exact path="/patient_list" element={<PatientList />}></Route>
            <Route exact path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
