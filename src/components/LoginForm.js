import "./LoginFormStyles.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="form-container">
      <h1>Log In to your Account!</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Submit Now</button>

        <p className="sign-p"> Don't have an account?  
         <Link to="/signup" className="login-link" > SignUp</Link> instead.</p>

      </form>
    </div>
  );
}

export default LoginForm;
