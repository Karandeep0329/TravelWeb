import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';
class TravelData extends Component 
{
    render(){
    return(
        <Map 
        google={this.props.google}
        style={{width:"100%", height:"100%"}}
        zoom={10}
        initialCenter=
        {
        {
            lat: 28.704060,
            lng: 77.102493
        }
        }
        />
    );
}
}
export default GoogleApiWrapper
({
    apiKey : "AIzaSyCfF3clWOCE4pjj6ukfXuHjeUXV5T6-WmE"
})(TravelData)