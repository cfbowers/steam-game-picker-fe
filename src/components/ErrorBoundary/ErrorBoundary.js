// https://reactjs.org/docs/error-boundaries.html
import React, { Component } from 'react'
import { thisExpression } from '@babel/types'

class ErrorBoundary extends Component {
    state = { hasError: false, errorMessage: '' }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error })
        //should log to an error service here later 
    }

    render() {
        if (this.state.hasError) {
            return <h1>this.state.errorMessage</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary