import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignupImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={SignupImg}
        title="Sign Up"
        btnClass="hide"
      />
      <SignupForm />
      <Footer />
    </>
  );
}

export default Signup;
