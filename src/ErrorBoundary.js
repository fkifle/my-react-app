import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    logErrorToMyService = (error, info) => {
        const fetchParams = {  
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ 
                "version": "1.1", "host": "frezererror.org", "short_message": "error4",
                "level": 6, "_some_info": "info4" }),
        };
            
        const url = "http://192.168.1.176:12201/gelf";
        fetch(url, fetchParams)  
        .then(res => {
            if (!res.ok) {
                alert("!res.ok")
                throw new TypeError(res.statusText);
            }
        });
        // Display fallback UI
        this.setState({ hasError: true });
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
