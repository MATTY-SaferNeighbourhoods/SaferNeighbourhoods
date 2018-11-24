import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
require('dotenv').config()


 let styles = {
    color: 'blue',
    border: 'solid'
  };

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY


const AnyReactComponent = ({ text }) => <div style={styles}>{text}</div>;


class MapComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            theftData:{},
            assaultData:{},
            collisionData:{}

        }
    }

    componentDidMount(){
        //Theft Data; 
        console.log(process.env);
        axios.get('https://api.namara.io/v0/data_sets/38ec612b-f522-418f-95f8-10c0fdc8bd52/data/en-0?geometry_format=wkt&api_key=73b3a4ac67e7ec0cfc3c69a958f29487d1fb0684fc2db7b2b533b8df7922cd3c&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=10').then((data)=>{
            console.log("theft data", data.data);
            this.setState({theftData:data.data});
        })
        //Assault Data;
        axios.get('https://api.namara.io/v0/data_sets/e544c601-4ea3-4a56-8130-1d062d4f29ab/data/en-0?geometry_format=wkt&api_key=73b3a4ac67e7ec0cfc3c69a958f29487d1fb0684fc2db7b2b533b8df7922cd3c&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=10').then((data)=>{
            console.log('Assault Data', data.data);
            this.setState({theftData:data.data})
        })
        //Fatal Collisions
        axios.get('https://api.namara.io/v0/data_sets/74287125-2cc6-4da1-8079-d59a09acd187/data/en-0?geometry_format=wkt&api_key=73b3a4ac67e7ec0cfc3c69a958f29487d1fb0684fc2db7b2b533b8df7922cd3c&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=10').then((data)=>{
            console.log('Fatal Collision Data', data.data)});

    }
    render(){
        return (
            <div>
                <h1> Map Goes Here </h1>
                <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                // bootstrapURLKeys={{ key: API_KEY}}
                defaultCenter={{lat:43.802116, 
                                lng: -79.17601}}
                defaultZoom={9}
                >
                <AnyReactComponent
                    lat={43.802116}
                    lng={-79.17601}
                    text={'Taro Yamashita'}
                />
                </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default MapComponent; 