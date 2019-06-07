import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card"
import NavBar from "../navbar/NavBar"
import axios from "axios"
import "./Near-me.css"

class NearMe extends Component {
  state = {
    venues: [],
    wehther: [],
    lat: 0,
    lon: 0
  };

  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.props.match.params.city
        },us&appid=da14f27ad149c662485c0327e1e4bcf8`
      )
      .then(response => {
        this.setState(
          {
            wehther: [response.data],
            lat: response.data.coord.lat,
            lon: response.data.coord.lon
          },
          () => {
            this.getVenues();
          }
        );
      });
  }
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap"
    );
    window.initMap = this.initMap;
  };
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
      client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
      query: "auto repair",
      near: `${this.props.match.params.city},${this.props.match.params.state}`,
      v: "20182507"
    };
    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log("ERROR!! " + error);
      });
  };
  initMap = () => {
    // Create A Map
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.city},us&appid=da14f27ad149c662485c0327e1e4bcf8`).then(response =>{
          this.setState({
            wehther: [response.data],
            lat: response.data.coord.lat,
            lon: response.data.coord.lon 
          }, () => { 
            this.getVenues()
          })
        })    
      }
      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
        window.initMap = this.initMap
      }
      getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
          client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
          client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
          query: "car maintenance",
          near:`${this.props.match.params.city},${this.props.match.params.state}`,
          v: "20182507"
        }
        axios.get(endPoint + new URLSearchParams(parameters))
          .then(response => {
            this.setState({
              venues: response.data.response.groups[0].items
            }, this.renderMap())
          })
          .catch(error => {
            console.log("ERROR!! " + error)
          })
      }
      initMap = () => {
        // Create A Map
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat:this.state.lat, lng: this.state.lon},
          // center:{lat:30.17, lng:-91.14},
          zoom: 9
        })
        // Create An InfoWindow
        var infowindow = new window.google.maps.InfoWindow()
        // Display Dynamic Markers
        this.state.venues.map(myVenue => {     
          var contentString = `${myVenue.venue.name}  
           ${myVenue.venue.location.address} ${myVenue.venue.location.city} ${myVenue.venue.location.state}`         
      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      });
      // Click on A Marker!
      marker.addListener("click", function() {
        // Change the content
        infowindow.setContent(contentString);

        // Open An InfoWindow
        infowindow.open(map, marker);
      });
    });
  };
  render() {
    console.log(this.state.wehther);
    return (
      <div>
        <NavBar />
        <main>
          {!this.state.wehther ? (
            <h1>loading..</h1>
          ) : (
            this.state.wehther.map(weatherdata => {
              return (
                <Card
                  key={weatherdata.main.temp}
                  style={{
                    height: "20vh",
                    textAlign: "center",
                    paddingTop: "20px"
                  }}
                >
                  <Typography style={{ fontSize: "25px" }}>
                    {this.props.match.params.city.toUpperCase()},{" "}
                    {this.props.match.params.state.toUpperCase()}
                  </Typography>
                  <Typography style={{ fontSize: "40px" }}>
                    {Math.round((weatherdata.main.temp * 9) / 5 - 459.67)}
                    {""} &#8457;
                  </Typography>
                  <Typography style={{ fontSize: "20px" }}>
                    {weatherdata.weather[0].description}
                  </Typography>
                </Card>
              );
            })
          )}
          <div id="map" />
        </main>
      </div>
    );
  }
}
    function loadScript(url) {
      var index  = window.document.getElementsByTagName("script")[0]
      var script = window.document.createElement("script")
      script.src = url
      script.async = true
      script.defer = true
      index.parentNode.insertBefore(script, index)
    }

export default NearMe;
