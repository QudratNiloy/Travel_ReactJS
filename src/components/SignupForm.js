import "./SignupFormStyles.css";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="form-container">
      <h1>Create an Account!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Submit Now</button>
        <p className="sign-p"> Already have an account?  
         <Link to="/login" className="login-link" > Login</Link> instead.</p>

      </form>
    </div>
  );
}

export default SignupForm;
