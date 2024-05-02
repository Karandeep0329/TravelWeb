import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';
class FranceMap extends Component 
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
            lat: 48.856613,
            lng: 2.352222  
        }
        }
        />
    );
}
}
export default GoogleApiWrapper
({
    apiKey : "AIzaSyCfF3clWOCE4pjj6ukfXuHjeUXV5T6-WmE"
})(FranceMap)