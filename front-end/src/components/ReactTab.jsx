import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import L from 'leaflet';


export default class ReactTab extends Component {
  componentDidUpdate() {
    const propData = this.props.propInfo;
    const long = propData.longitude;
    const lat = propData.latitude;
    const address = propData.address;
    const city = propData.city;

    var mymap = L.map('mapid');

    mymap.setView([lat, long], 11);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZmFyemluaiIsImEiOiJjanQxdDkyNTEwZnJiNDRtbzJpaW16Zm5mIn0.w5RsgalV-eWHR2o9WsuJEA'
    }).addTo(mymap);

    var redIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var marker = L.marker([lat, long]).addTo(mymap);
    L.marker([lat, long], { icon: redIcon }).addTo(mymap);
    marker.bindPopup(`<b>${address}, ${city}</b>`).openPopup();
  }


  render() {
    const propData = this.props.propInfo;
    return (
      <div>
        <div className="tabs">
          <Tabs>
            <TabList>
              <Tab>Maps and Location</Tab>
              <Tab>Description</Tab>
            </TabList>

            <TabPanel>
              <div id="mapid" style={{ height: '50vh' }}></div>
            </TabPanel>
            <TabPanel>
              <p>{propData.description}</p>
            </TabPanel>


          </Tabs>
        </div>
      </div>
    )
  }
}



