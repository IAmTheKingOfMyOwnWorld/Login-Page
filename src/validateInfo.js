export default function validateInfo(values){
  let errors={};
  if(!values.username.trim()){
    errors.username="Username Required";
  }
  else if(values.username.length<8){
    errors.username="Username needs to be more than 8 characters long";
  }
  if(!values.email){
    errors.email="Email Required";
  }
  else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Invalid Email Id";
  }
  if(!values.password){
    errors.password="Password Required";
  }
  else if(values.password.length<6){
    errors.password="Password needs to be more than 6 characters long";
  }
  if(!values.confirmPassword){
    errors.confirmPassword="Password Required";
  }
  else if(values.confirmPassword!==values.password){
    errors.confirmPassword="Passwords do not match";
  }
  return errors;
}