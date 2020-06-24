import React from 'react';

class Keypad extends React.Component {

    function = () => console.log('Entering password...')
    

render() {
    return(
        <div>
        <input type="password" onKeyUp={this.function}/> 
        </div>
    )
  }
}

export default Keypad;