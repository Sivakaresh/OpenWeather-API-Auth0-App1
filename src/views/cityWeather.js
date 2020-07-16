import React from "react";
import ApiCall from "./apiCall";
import cityInfo from "./data/cities";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import "./css/cityWeather.css";

class CityWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityCode: null,
    };
  }

  render() {
    const cityCount = cityInfo;

    return (
      <>
        <h1>Weather Information</h1>
        <div className="container">
          {cityCount.map((i) => {
            return (
              <div key={i.CityCode}>
                <ApiCall cityID={i.CityCode} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default withAuthenticationRequired(CityWeather, {
  onRedirecting: () => <Loading />,
});
