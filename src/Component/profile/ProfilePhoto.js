import React, { Component } from 'react'
import profile from "./profile.png"

export default class ProfilePhoto extends Component {
    render() {
        return (
            <>
                <img src={profile} alt="this is the moon" width="100"/>
            </>
        )
    }
}
