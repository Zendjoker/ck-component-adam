import React, { Component } from 'react'

const firstName = "Adam"
const lastName = "Azouz" 

export default class FullName extends Component {
    render() {
       
        return (
            
            <div>
                <h3>{`First Name : ${firstName}`}</h3>
                <h3>{`Last Name : ${lastName}`}</h3>
            </div>
        )
    }
}
