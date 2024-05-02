import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import AboutImg from "../assets/Contact.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact (){
    return(
        <>
        <NavBar />
        <Hero
        cName="hero-About"
        heroImg={AboutImg}
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>
    );
}
export default Contact;