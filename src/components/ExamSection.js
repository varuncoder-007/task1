import React from "react";
import "./ExamSection.css";
import Card from "./Card";
function ExamSection() {
  return (
    <div className="examSection">
      <div className="top_section">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className="midsection">
        <p className="para">
          Exam Name {"  "}
          <span className="register">VIEW ALL {">"}</span>
        </p>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
        <p className="para">
          Exam Name {"  "}
          <span className="register">VIEW ALL {">"}</span>
        </p>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
        <p className="para">
          Exam Name {"  "}
          <span className="register">VIEW ALL {">"}</span>
        </p>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ExamSection;
