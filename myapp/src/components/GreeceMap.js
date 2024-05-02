import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';
class GreeceMap extends Component 
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
            lat: 39.074207,
            lng: 21.824312  
        }
        }
        />
    );
}
}
export default GoogleApiWrapper
({
    apiKey : "AIzaSyCfF3clWOCE4pjj6ukfXuHjeUXV5T6-WmE"
})(GreeceMap)