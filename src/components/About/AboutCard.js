import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Han Yeaktong </span>
            from <span className="purple"> Phnom Penh, Cambodia.</span>
            <br /> I get this project from GitHub
            <br />
            It's NOT mine.
            <br />
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "YOLO"{" "}
          </p>
          <footer className="blockquote-footer">me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
