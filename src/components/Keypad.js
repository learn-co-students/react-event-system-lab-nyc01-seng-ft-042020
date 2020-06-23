// Code Keypad Component Here

import React from "react";

class Keypad extends React.Component {

    message = () => {
        console.log('Entering password...');
    }

    render() {
        return (
        <input onKeyUp={this.message} type="password" />
        )
    }

}

export default Keypad;