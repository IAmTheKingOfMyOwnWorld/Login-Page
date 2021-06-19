import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSubmit=({submitForm})=>{
  const {handleChange, handleSubmit, values, errors}=useForm(submitForm, validate);
  return(
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>DevOps - Form</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">Username</label>
          <input id="form-input" type="text" name="username" className="form-input" placeholder="Enter your username" value={values.username} onChange={handleChange}/>
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="form-input" type="email" name="email" className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="form-input" type="password" name="password" className="form-input" placeholder="Enter your password" value={values.password} onChange={handleChange}/>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input id="form-input" type="password" name="confirmPassword" className="form-input" placeholder="Confirm password" value={values.confirmPassword} onChange={handleChange}/>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button className="form-input-btn" type="Submit">Register</button>
        <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
      </form>
    </div>
  );
};

export default FormSubmit;
