import React from 'react';
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import './SignUp.css';

export default function SignUp() {
  const history = useHistory();
  const goHome = () => history.push('/');
  return (
    <div className="signup-back">
      <h1 className="signup">Like and Subscribe</h1>
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
