import { Link } from 'react-router-dom';
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/France.jpg";
import Trip2 from "../assets/Greece.jpg";
import Trip3 from "../assets/Italy.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <div className="tripdata-container">
                    <TripData 
                        image={Trip1}
                        heading="Trip in France"
                        text="Well beyond the confines of the capital, there are new adventures to discover, from the low-key surf scene in Hossegor to a wave of modernist-tinged openings in the perma-chic French Riviera.France has been wooing travellers with its heavenly cuisine and captivating culture for centuries. From the châteaux of the Loire Valley to the legendary Latin Quarter of Paris and the ski resorts of the French Alps, each region offers a new discovery."
                    />
                    <Link to="/FranceMapPlan" className="view-map-button">View in Map</Link>
                </div>
                <div className="tripdata-container">
                    <TripData 
                        image={Trip2}
                        heading="Trip in Greece"
                        text="The new Polycentric Museum of Aigai is located in Vergina, Macedonia, at an 8 km distance SE of Veria Town (or 73 km W of Thessaloniki City). Visit the Central Museum Building, and the archaeological park (a UNESCO site) which includes the Ancient Theatre, the Palace of Aigai (the first capital of the Kingdom of Macedonia), and the Royal Tombs (the most notable one being that of King Philip II, father to Alexander the Great)."
                    />
                    <Link to="/GreeceMapPlan" className="view-map-button">View in Map</Link>
                </div>
                <div className="tripdata-container">
                    <TripData 
                        image={Trip3}
                        heading="Trip in Italy"
                        text="Nestled in the heart of Tuscany, Florence is a city that exudes elegance and artistic grandeur.Tuscany is famous for beautiful hill towns but few are quite as stunning as San Gimignano.Lake Garda is undoubtedly one of the most beautiful places. Venice, often referred to as the Floating City, is an enchanting destination in northern Italy that holds a special place in the hearts of travellers.Italy has left a powerful mark on Western culture and cuisine."
                    />
                    <Link to="/ItalyMapPlan" className="view-map-button">View in Map</Link>
                </div>
            </div>
        </div>
    );
}

export default Trip;
