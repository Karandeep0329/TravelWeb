import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import AboutImg from "../assets/Image2.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service (){
    return(
        <>
        <NavBar />
        <Hero
        cName="hero-About"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip />
        <Footer/>
        </>
    )
}
export default Service;