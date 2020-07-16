import React from "react";
import "./css/apiCall.css";

class ApiCall extends React.Component {
  state = {
    loading: true,
    city: null,
    cityID: this.props.cityID,
  };
  async componentDidMount() {
    const API_KEY = "c7f06d5d7d59dec28e86edc53b5babfc";
    const CITY_CODE = this.state.cityID;
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_CODE}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      city: data,
      loading: false,
    });
    // console.log(this.props.cityID);
  }

  render() {
    return (
      <div id="main">
        {this.state.loading || !this.state.city ? (
          <div>Loading...</div>
        ) : (
          <div id="cityinfo">
            <div>
              {/* <span>City Name :</span> */}
              <h2>{this.state.city.name}</h2>
            </div>
            <div>
              <span>City Code :</span>
              {this.state.city.id}
            </div>
            <div id="desc">
              {/* <span>Description :</span> */}
              <span id="desc">{this.state.city.weather[0].description}</span>
            </div>
            <div>
              <span>Temperature :</span>
              <h1>{this.state.city.main.temp}</h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ApiCall;
