import React, { Component } from 'react'
import Spinner from "../../Spinner";
import swapiServices from '../../services'
import withData from '../withData'

const Planets = ({data}) => {
        console.log(data);
        return(
            <div>{data[0].name}</div>
        );
};
export default withData(Planets, swapiServices.getPlanets);