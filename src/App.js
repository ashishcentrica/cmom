import React from 'react'
import './App.css'
import { ErrorBoundary } from './ErrorBoundary'
import { Markets } from './components/Markets'

function App () {
    return (
        <div className="App">
            <ErrorBoundary>
                <Markets/>
            </ErrorBoundary>
        </div>
    )
}

export default App
