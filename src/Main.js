import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CoinDetailsContainer } from './components/CoinDetailsContainer'
import * as PropTypes from 'prop-types'
import { MarketsContainer } from './components/MarketsContainer'

export const Main = () => {
    return <div className="App">
        <h3>Market App</h3>
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) =>
                        <MarketsContainer {...props}/>}>
                    </Route>
                    <Route path="/coin-details/:id">
                        <CoinDetailsContainer/>
                    </Route>
                </Switch>
            </Router>
        </ErrorBoundary>
    </div>
}

Main.propTypes = {render: PropTypes.func}
