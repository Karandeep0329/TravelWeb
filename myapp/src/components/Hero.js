import "./HeroStyles.css";
import { useNavigate } from "react-router-dom";
function Hero(props){
    const navigate = useNavigate()
    return(
        <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a onClick ={() => navigate('TravelPlan')} className={props.btnClass} >
                {props.buttonText}
                </a>
            </div>
        </div>
        </>
    );

}
export default Hero;