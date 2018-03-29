import React, { Component } from 'react'
import { Navbar, Footer } from '../Components'
import * as s from '../Styles/profile-styles'
import * as mockData from '../data.json'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = mockData[this.props.match.params.id-1]
    }

    render() {
        if (mockData[this.props.match.params.id-1]) {
            return (
                <React.Fragment>
                    <Navbar/>
                    <s.root>
                        <h1>{`${this.state.first_name} ${this.state.last_name}`}</h1>
                        <span>{`Note: ${this.state.rate}/5`}</span>
                    </s.root>
                    <Footer />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Navbar/>
                    <s.root>
                        <h1>{`Profil introuvable`}</h1>
                    </s.root>
                    <Footer />
                </React.Fragment>
            )
        }
    }
}
