import React from 'react'
import PropTypes from 'proptypes'
import { Redirect } from 'react-router-dom'
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
)((props, context) =>
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
        clickable={true}
        labelStyle={{
          backgroundColor: "#E0403C",
          color: "white",
          fontSize: "16px",
          padding: "10px 16px",
          borderRadius: "5px",
          zindex: "2200"
      }}>
        <div>Vous</div>
      </MarkerWithLabel>
      {mockData.map((item, index) => (
        (item.role === props.role) ?
        <MarkerWithLabel position={item.location}
          key={index}
          labelAnchor={new window.google.maps.Point(12, 60)}
          onClick={() => props.navigate(item.id)}
          labelStyle={{
            backgroundColor: "#E0403C",
            color: "white",
            fontSize: "16px",
            padding: "10px 16px",
            borderRadius: "5px",
            minWidth: "120px",
            zindex: "2200"
        }}>
          <React.Fragment>
            <div>{`${item.first_name} ${item.last_name}`}</div>
            <div>{`Note: ${item.rate}/5`}</div>
          </React.Fragment>
        </MarkerWithLabel> : null
      ))}
    </MarkerClusterer>
  </GoogleMap>
)

export default class HeaderAppMap extends React.PureComponent {
  state = {
    coords: this.props.state.coords,
    redirect: false,
    redirectTo: -1
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

  navigateTo(h) {
    this.setState({
      redirect: true,
      redirectTo: h
    })
  }

  render() {   
    return (
      <s.map>
        {(this.state.redirect) ?
          <Redirect to={`/profile/${this.state.redirectTo}`} />
        : null}
        <MapComponent coords={this.state.coords} navigate={(h) => this.navigateTo(h)} role={this.props.state.role}/>
      </s.map>
    )
  }
}
