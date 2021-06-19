import React, {useState} from 'react';
import './Form.css';
import FormSubmit from './FormSubmit';
import FormSuccess from './FormSuccess';

const Form=()=>{
  const [isSubmitted, setIsSubmitted]=useState(false);
  function submitForm(){
    setIsSubmitted(true);
  }
  return(
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img className="form-img-1" src="img/img-2.svg" alt="spaceship"/>
        </div>
        {!isSubmitted ?(<FormSubmit submitForm={submitForm}/>):(<FormSuccess/>)}
      </div>
    </>
  );
};

export default Form;
