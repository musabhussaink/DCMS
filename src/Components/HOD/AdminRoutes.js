import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'
import AddSession from './AddSession'
import SessionView from './SessionView'

export default class AdminRoutes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Menu />

                    {/*Admin Session Routes */}
                    <Route path="HOD/AddSession" exact strict render={
                        () => {
                            return (<AddSession/>)
                        }
                    } />
                    <Route path="HOD/Session_View" exact strict render={
                        () => {
                            return (<SessionView/>)
                        }
                    } />
                    
                </div>
            </Router>
        )
    }
}
