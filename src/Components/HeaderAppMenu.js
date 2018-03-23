import React, { Component } from 'react'
import * as btn from '../Styles/buttons.js'
import {headerAppStyles as h, menuStyles as m} from '../Styles/headerapp-styles.js'

export default class HeaderAppMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: 0 
        }
    }

    toggleRole(val) {
        this.setState({role: val})
    }

    render() {
        return (
            <h.container>
                <m.appMenu>
                    <m.title>La rencontre se fait ici</m.title>
                    <m.inputGroup>
                        <p>Vous souhaitez:</p>
                        <div>
                            <input type={'radio'}/>
                            <label>Faire les courses</label>
                        </div>
                        <div>
                            <input type={'radio'}/>
                            <label>Trouver un voisin</label>
                        </div>
                        <p>Dites nous où:</p>
                        <div>
                            <input type={'text'} placeholder={'Votre adresse'}/>
                        </div>
                    </m.inputGroup>
                    <btn.roundedBlue>Trouvez votre voisin</btn.roundedBlue>
                </m.appMenu>
            </h.container>
        )
    }
}
