import React, { Component } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import AssaultComponent from './AssaultComponent.jsx'
import TheftComponent from './TheftComponent.jsx'
import CollisionComponent from './CollisionComponent.jsx'
require('dotenv').config()



class MapComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            showTheftData: true,
            showAssaultData: true,
            showCollisionData: true,
            theftData:[],
            assaultData: [],
            collisionData:[]

        }
        this.renderAssaults = this.renderAssaults.bind(this);
        this.renderThefts = this.renderThefts.bind(this);
        this.renderCollisions = this.renderCollisions.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount(){
        //Theft Data; 
        axios.get('https://api.namara.io/v0/data_sets/38ec612b-f522-418f-95f8-10c0fdc8bd52/data/en-0?geometry_format=wkt&api_key=73b3a4ac67e7ec0cfc3c69a958f29487d1fb0684fc2db7b2b533b8df7922cd3c&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=10').then((data)=>{
            this.setState({theftData:data.data}, ()=>{
            })
        })
        //Assault Data;
        axios.get('https://api.namara.io/v0/data_sets/e544c601-4ea3-4a56-8130-1d062d4f29ab/data/en-0?geometry_format=wkt&api_key=73b3a4ac67e7ec0cfc3c69a958f29487d1fb0684fc2db7b2b533b8df7922cd3c&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=10').then((data)=>{
            this.setState({assaultData:data.data})
        })
        //Fatal Collisions
        axios.get('https://api.namara.io/v0/data_sets/74287125-2cc6-4da1-8079-d59a09acd187/data/en-0?geometry_format=wkt&api_key=73b3a4ac67e7ec0cfc3c69a958f29487d1fb0684fc2db7b2b533b8df7922cd3c&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=10').then((data)=>{
            this.setState({collisionData: data.data})
        });
           

    }

    renderCollisions = () => {
        this.setState({showCollisionData: !this.state.showCollisionData})
    };

    renderThefts = () => {
        console.log('clicked')
        this.setState({showTheftData: !this.state.showTheftData})
        
    };

    renderAssaults = () =>{
        this.setState({showAssaultData: !this.state.showAssaultData})
    };

    getLocation = () =>{
       // geolocation 
    }

    render(){
        return (
            <div>
                <h1> Map Goes Here </h1>
                
                <div style={{ height: '50vh', width: '100%' }}>
                <button onClick={()=> this.renderCollisions()}> Show Collisions </button>
                <button onClick={()=> this.renderAssaults()}> Show Assaults </button>
                <button onClick={()=> this.renderThefts()}> Show Thefts </button>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAhxD_46rmSKa-1LlFjGO4-eY2KuyWmzTY'}}
                defaultCenter={{lat:43.6532, 
                                lng: -79.3832}}
                defaultZoom={11}
                >
                { this.state.showAssaultData && this.state.assaultData.map((incident)=> <AssaultComponent lat={incident.lat} lng={incident.long} text='Assault' />)}
                { this.state.showTheftData && this.state.theftData.map((incident)=> <TheftComponent lat={incident.lat} lng={incident.long} text='Theft' />)}
                { this.state.showCollisionData && this.state.collisionData.map((incident)=> <CollisionComponent lat={incident.latitude} lng={incident.longitude} text='Collision' />)}
        
                </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default MapComponent; 