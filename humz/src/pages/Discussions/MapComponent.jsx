import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import AssaultComponent from "./AssaultComponent.jsx";
import TheftComponent from "./TheftComponent.jsx";
import CollisionComponent from "./CollisionComponent.jsx";
import { runInThisContext } from "vm";
require("dotenv").config();

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTheftData: true,
      showAssaultData: true,
      showCollisionData: true,
      theftData: [],
      assaultData: [],
      collisionData: [],
      limit: 250,
      shownLimit: 10
    };
    this.renderAssaults = this.renderAssaults.bind(this);
    this.renderThefts = this.renderThefts.bind(this);
    this.renderCollisions = this.renderCollisions.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    //Theft Data;
    axios
      .get(
        `https://api.namara.io/v0/data_sets/38ec612b-f522-418f-95f8-10c0fdc8bd52/data/en-0?geometry_format=wkt&api_key=e7fec4e08b35a6956788ad970636d495e7478065d3ec5663cf4776688956d7ed&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c/export&limit=${
          this.state.limit
        }&order=occurrencedate DESC`
      )
      .then(data => {
        this.setState({ theftData: data.data }, () => {});
      });
    //Assault Data;
    axios
      .get(
        `https://api.namara.io/v0/data_sets/e544c601-4ea3-4a56-8130-1d062d4f29ab/data/en-0?geometry_format=wkt&api_key=e7fec4e08b35a6956788ad970636d495e7478065d3ec5663cf4776688956d7ed&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&limit=${
          this.state.limit
        }&order=occurrencedate DESC`
      )
      .then(data => {
        this.setState({ assaultData: data.data });
      });
    //Fatal Collisions
    axios
      .get(
        `https://api.namara.io/v0/data_sets/74287125-2cc6-4da1-8079-d59a09acd187/data/en-0?geometry_format=wkt&api_key=e7fec4e08b35a6956788ad970636d495e7478065d3ec5663cf4776688956d7ed&organization_id=5bdc5265c0b35c45d030159b&project_id=5bdc5ca1b0006245734c433c&order=date DESC&limit=${
          this.state.limit
        }`
      )
      .then(data => {
        this.setState({ collisionData: data.data });
      });
  }

  renderCollisions = () => {
    this.setState({ showCollisionData: !this.state.showCollisionData });
  };

  renderThefts = () => {
    console.log("clicked");
    this.setState({ showTheftData: !this.state.showTheftData });
  };

  renderAssaults = () => {
    this.setState({ showAssaultData: !this.state.showAssaultData });
  };

  getLocation = () => {
    // geolocation
  };

  changeHandler = e => {
    this.setState({ shownLimit: e.target.value }, () => {});
    console.log("the limit does not exist!", this.state.shownLimit);
  };

  render() {
    return (
      <div>
        <h1> Discussion Board </h1>

        <div style={{ height: "50vh", width: "100%" }}>
          <form>
            <input
              value={this.state.shownLimit}
              onChange={this.changeHandler}
            />
          </form>
          <button onClick={() => this.renderCollisions()}>
            {" "}
            Show Collisions{" "}
          </button>
          <button onClick={() => this.renderAssaults()}> Show Assaults </button>
          <button onClick={() => this.renderThefts()}> Show Thefts </button>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAhxD_46rmSKa-1LlFjGO4-eY2KuyWmzTY"
            }}
            defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
            defaultZoom={11}
          >
            {this.state.showAssaultData &&
              this.state.assaultData.map((incident, index) => {
                while (index < this.state.shownLimit) {
                  return (
                    <AssaultComponent
                      lat={incident.lat}
                      lng={incident.long}
                      text="Assault"
                    />
                  );
                }
              })}
            {this.state.showTheftData &&
              this.state.theftData.map((incident, index) => {
                while (index < this.state.shownLimit) {
                  return (
                    <TheftComponent
                      lat={incident.lat}
                      lng={incident.long}
                      text="Theft"
                    />
                  );
                }
              })}
            {this.state.showCollisionData &&
              this.state.collisionData.map((incident, index) => {
                while (index < this.state.shownLimit) {
                  return (
                    <CollisionComponent
                      lat={incident.latitude}
                      lng={incident.longitude}
                      text="Collision"
                    />
                  );
                }
              })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapComponent;
