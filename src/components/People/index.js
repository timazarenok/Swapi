import React, { Component } from 'react'
import Spinner from "../../Spinner";
import swapiServices from '../../services'

export default class People extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        swapiServices.getData('/people/')
        .then(response => {
            this.setState({
                data: response
            })
        })
    }

    render() {
        const {data} = this.state;
        if(!data) {
            return <Spinner />
        }
        console.log(this.state)
        return(
            <div>Hello Leshka</div>
        );
    }
}