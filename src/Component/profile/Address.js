import React, { Component } from 'react'
const address = "Menzah 6"
const numero = 20200483
export default class Address extends Component {
    render() {
        return (
            <div>
                
                <h3>{`Adresse : ${address}`}</h3>
                <h3>{`Numero de telephone  : ${numero}`}</h3>
            </div>
        )
    }
}
