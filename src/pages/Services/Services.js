import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import './Services.css';

export default function Services() {
  const history = useHistory();
  const goHome = () => history.push('/');
  return (
    <div className="services-back">
      <h1 className="services">SERVICES</h1>
      <div className="btn-container">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={goHome}
        >
          HOME
        </Button>
      </div>
    </div>
  );
}
