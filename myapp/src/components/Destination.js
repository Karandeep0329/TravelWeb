import Mountain1 from "../assets/Ladakh1.jpg";
import Mountain2 from "../assets/Ladakh2.jpg";
import River1 from "../assets/Srinagar1.jpg";
import River2 from "../assets/Srinagar2.jpg";
import Sea1 from "../assets/Pondicherry1.jpg";
import Sea2 from "../assets/Pondicherry2.jpg";
import Raj1 from "../assets/Jaipur1.jpg";
import Raj2 from "../assets/Jaipur2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Pack, Set, Go</p>
            <DestinationData
            className="first-des"
            heading="Leh Ladakh"
            text="Located at a height of 11,500 feet, Leh finds place in the bucket list of many travel enthusiasts. It will leave you in awe with its iconic monasteries and picturesque landscapes. The monthsfrom March to June are the best time to visit this tourist destination. The clear blue skies, low temperatures and pleasant Leh weather make the sightseeing and exploration experience extremely pleasing. Furthermore, travellers can also hike and trek to stunning peaks during this period."
            img1={Mountain1}
            img2={Mountain2}
            />
            <DestinationData
            className="first-des-reverse"
            heading="Srinagar"
            text="Nestled in the Kashmir Valley, surrounded by the magnificent Himalayas and located on the banks of River Jhelum, Srinagar is one of the finest holiday destinations in India. Srinagar is a Sanskrit word that means the city of wealth and abundance. Breathtaking mountains, lush landscapes, mesmerizing lakes, stunning Mughal gardens and luxuriant orchards add to the charm of Srinagar. Dal Lake, Nigeen lake, Walur lake, Shankaracharya Hill, Hari Parbat, SPS museum, and Mughal Garden are some of the foremost places to visit in Srinagar. A tour on the charming houseboats/ shikaras on the iconic Dal Lake is one of the major tourist attractions among the places to visit in Srinagar."

            img1={River1}
            img2={River2}
            />
            <DestinationData
            className="first-des"
            heading="Pondicherry"
            text="Pondicherry is the capital of the Union Territory of Pondicherry, India, now known as Puducherry. Pondicherry was a French settlement till 1954. The city is dotted with French-style houses, shops, churches and bright coloured cafés. Places to visit in Pondicherry like Sri Aurobindo Ashram and Auroville are flocked by visitors from all over the world who come here in search of spiritual bliss through yoga and meditation. Other places to visit in Pondicherry demonstrate a perfect amalgamation of French and Indian culture. Be it the nightlife, clubs and beach parties or the cafés and restaurants serving impeccable French cuisine, you will find a blend of both cultures everywhere."
            img1={Sea1}
            img2={Sea2}
            />
            <DestinationData
            className="first-des-reverse"
            heading="Jaipur"
            text="Jaipur is one of India's most picturesque historical settlements. Jaipur is known as the Pink City. Jaipur, the capital of Rajasthan, is located in a semiarid region. Maharaja Sawai Jai Singh II, King of Amber, commissioned Bengali architect Vidyadhar Bhattacharya to design and construct this lovely city. When it comes to vastu shastra city planning, it is also the first in India. Jaipur City features incredible monuments, vibrant markets and several food stalls that will truly make your experience memorable."
            img1={Raj1}
            img2={Raj2}
            />

        </div>
    );
}
export default Destination;