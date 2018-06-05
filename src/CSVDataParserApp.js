import React, { Component } from 'react';

class CSVDataParserApp extends Component {

    state = {
        data: null,
    }

    componentWillMount() {

        // Your parse code, but not seperated in a function
        let csvFilePath = require("./Data.csv");
        let Papa = require("papaparse/papaparse.min.js");
        const parseResults = new Promise((resolve, reject) => Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: (results) => {
                const { errors, data } = results;
                if (Array.isArray(errors) && errors.length > 0) {
                    const errorMessage = 'An error occurred while attempting to parse the CSV file';
                    return reject(new Error(errorMessage));
                }
                return resolve(data);
            }
        }));

        return parseResults.then((data) => {
            return this.setState({ data });
        });
    }

    render() {
        // Your render function
        return <div>
            <ul>
                {this.state.data && this.state.data.map(function (datum, i) {
                    return <li key={i}>{datum.column1} - {datum.column2} - {datum.column3} </li>
                })
                }
            </ul>

        </div>
    }
}

export default CSVDataParserApp;