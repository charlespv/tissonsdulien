import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"
import { mapStyles as s } from '../Styles/headerapp-styles.js'

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAzhpQJO0NaUJbilkXiFD5va7wKTJouIfA&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={props.coords}
      defaultOptions={{
        disableDefaultUI: true,
        zoomControl: false,
        pasControl: false,
      }}
    >
    {props.isMarkerShown &&
      <Marker position={props.coords}
        onClick={props.onMarkerClick}/>
    }
    </GoogleMap>
  )

export default class HeaderAppMap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    console.log(this.props.state)
    return (
      <s.map>
        <MapComponent isMarkerShown coords={this.props.state.coords}/>
      </s.map>
    )
  }
}
