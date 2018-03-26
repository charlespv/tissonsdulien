import React, { Component } from 'react'

const MapContext = React.createContext('map')
const MapConsumer = MapContext.Consumer

class MapProvider extends Component {
    state = {
        state: {
            showMap: false,
            role: 0,
            address: '',
            coords: {
                lat: -1,
                lng: -1
            }
        },
        actions: {
            showMap: () => {
                this.setState({
                    ...this.state,
                    state: {
                        ...this.state.state,
                        showMap: true
                    }
                })
            },
            hideMap: () => {
                this.setState({
                ...this.state,
                state: {
                    ...this.state.state,
                    showMap: false
                    }
                })
            },
            updateRole: (data) => {
                this.setState({
                    ...this.state,
                    state: {
                        ...this.state.state,
                        role: data
                    }
                })
            },
            updateAddress: (data) => {
                this.setState({
                    ...this.state,
                    state: {
                        ...this.state.state,
                        address: data
                    }
                })
            },
            updateCoords: (data) => {               
                this.setState({
                    ...this.state,
                    state: {
                        ...this.state.state,
                        coords: data
                    }
                })
            }
        }
    }

    render () {
        return (
            <MapContext.Provider value={this.state}>
                {this.props.children}
            </MapContext.Provider>
        )
    }
}

export {
    MapConsumer,
    MapProvider
}