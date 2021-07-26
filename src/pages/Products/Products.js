import React from 'react';
import { useHistory } from "react-router";
import { Button } from "../../components/Button/Button";
import './Products.css';

export default function Products() {
  const history = useHistory();
  const goHome = () => history.push('/');
  return (
    <div className="products-back">
      <h1 className="products">PRODUCTS</h1>
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
