import React, { Component } from 'react'
import { Error } from './components/Error'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        console.error(`error ${error} errorInfo: ${errorInfo}`)
    }
    
    render() {
        if (this.state.hasError) {
            return <Error />
        }
        
        return this.props.children;
    }}
