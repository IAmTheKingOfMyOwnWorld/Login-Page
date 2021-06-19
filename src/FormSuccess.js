import React from 'react';
import './Form.css';

const FormSuccess=()=>{
  return(
    <div className="form-content-right">
      <h1 className="form-success-1">! Congratulations !</h1>
      <h1 className="form-success-2">We have received your request</h1>
      <img className="form-img-2" src="img/img-3.svg" alt="success-image"/>
    </div>
  );
};

export default FormSuccess;