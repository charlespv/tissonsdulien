import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import * as btn from '../Styles/buttons.js'
import {headerAppStyles as h, menuStyles as m} from '../Styles/headerapp-styles.js'

export default class HeaderAppMenu extends Component {
    constructor(props) {
        super(props)
        this.handleFormSubmit = (e) => {
            if (this.props.state.address !== '' && this.props.state.role !== 0) {
                geocodeByAddress(this.props.state.address)
                    .then(results => getLatLng(results[0]))
                    .then(latLng => {
                        console.log(latLng)
                        this.props.actions.updateCoords(latLng)
                        this.props.actions.toggleMap()
                    })
                    .catch(error => {
                        alert('Veuillez remplir tout les champs avec des informations valides.')
                    })
            } else {
                alert('Veuillez remplir tout les champs avec des informations valides.')
            }
        }
    }

    toggleRole(val) {
        this.props.actions.updateRole(val)
    }

    render() {
        const inputProps = {
            value: this.props.state.address,
            onChange: (address) => this.props.actions.updateAddress(address)
        }
        return (
            <h.container>
                <m.appMenu>
                    <m.title>La rencontre se fait ici</m.title>
                    <m.inputGroup>
                        <p>Vous souhaitez:</p>
                        <div>
                            <input type={'radio'}
                                checked={(this.props.state.role===1) ? true : false}
                                onChange={() => this.toggleRole(1)}
                            />
                            <label>Faire les courses</label>
                        </div>
                        <div>
                            <input type={'radio'}
                                checked={(this.props.state.role===2) ? true : false}
                                onChange={() => this.toggleRole(2)}
                            />
                            <label>Trouver un voisin</label>
                        </div>
                        <p>Dites nous où:</p>
                        <div>
                            <PlacesAutocomplete inputProps={inputProps} />
                        </div>
                    </m.inputGroup>
                    <btn.roundedBlue onClick={() => this.handleFormSubmit()}>Trouvez votre voisin</btn.roundedBlue>
                </m.appMenu>
            </h.container>
        )
    }
}
