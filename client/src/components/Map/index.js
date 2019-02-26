import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs } from "react-google-maps";
import Map from './Map';


const googleMap = (props) => {
  const MapLoader = withScriptjs(Map);
  {console.log(props)}
  return (
    <MapLoader
      lat={props.lat}
      lng={props.lng}
      userlat={props.userlat}
      userlng={props.userlng}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZuF8mTrMiYKcZ7z_Z8HnPrG201L2kpqY"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default googleMap
