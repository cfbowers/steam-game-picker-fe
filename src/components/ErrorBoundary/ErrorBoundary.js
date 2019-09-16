import React, { Component } from 'react'
import { thisExpression } from '@babel/types'

class ErrorBoundary extends Component {
    state = { hasError: false, errorMessage: '' }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error })
    }

    render() {
        if (this.hasError) {
            return <h1>Something went wrong</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary