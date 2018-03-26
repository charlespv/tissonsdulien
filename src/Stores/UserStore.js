import React, { Component } from 'react'

const UserContext = React.createContext('user')
const UserConsumer = UserContext.Consumer

class UserProvider extends Component {
    state = {
        state: {
            
        },
        actions: {
            isLogedin: () => {
                return true
            },
            login: () => {
                return true
            },
            register: () => {
                return true
            },
            setState: (data) => {
                this.setState(data)
            }
        }
    }

    render () {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export {
    UserConsumer,
    UserProvider
}