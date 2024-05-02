import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';
class ItalyMap extends Component 
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
            lat: 41.871941,
            lng: 12.567380
        }
        }
        />
    );
}
}
export default GoogleApiWrapper
({
    apiKey : "AIzaSyCfF3clWOCE4pjj6ukfXuHjeUXV5T6-WmE"
})(ItalyMap)