import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import AboutImg from "../assets/Image1.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About (){
    return(
        <>
        <NavBar />
        <Hero
        cName="hero-About"
        heroImg={AboutImg}
        title="About US"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
    )
}
export default About;