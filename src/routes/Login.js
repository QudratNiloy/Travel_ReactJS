import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import LoginImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={LoginImg}
        title="Log In"
        btnClass="hide"
      />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
