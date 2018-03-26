import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"
import { compose, withProps } from "recompose"
import { mapStyles as s } from '../Styles/headerapp-styles.js'
import * as mockData from '../data.json'

const MapComponent = compose(
  withProps({
    googleMapURL: document.getElementById('MapsAPIURL').getAttribute('src'),
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={props.coords}
      center={props.coords}
      defaultOptions={{
        disableDefaultUI: true,
        zoomControl: false,
        pasControl: false,
      }}
    >
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        <MarkerWithLabel position={props.coords}
          labelAnchor={new window.google.maps.Point(35, 60)}
          labelStyle={{
            backgroundColor: "#E0403C",
            color: "white",
            fontSize: "16px",
            padding: "10px 16px",
            borderRadius: "5px",
            zindex: "2200"
        }}>
          <div onClick={() => console.log('yay')}>Vous</div>
        </MarkerWithLabel>
        {mockData.data.map((item, index) => (
          <MarkerWithLabel position={item}
            key={index}
            labelAnchor={new window.google.maps.Point(55, 60)}
            labelStyle={{
              backgroundColor: "#E0403C",
              color: "white",
              fontSize: "16px",
              padding: "10px 16px",
              borderRadius: "5px"
          }}>
            <div>{`Voisin n°${index}`}</div>
          </MarkerWithLabel>
        ))}
      </MarkerClusterer>
    </GoogleMap>
  )

export default class HeaderAppMap extends React.PureComponent {
  state = {
    coords: this.props.state.coords
  }

  componentWillReceiveProps(nextProps) {    
    this.setState({coords: nextProps.state.coords})
  }

  componentWillMount() {
    this.setState({ markers: [] })
  }
  
  componentDidMount() {
    this.delayedShowMarker()
  }
  
  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  render() {   
    return (
      <s.map>
        <s.mapOverlay></s.mapOverlay>
        <MapComponent coords={this.state.coords}/>
      </s.map>
    )
  }
}
