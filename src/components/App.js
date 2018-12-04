import React from 'react';
import reactImage from '../images/react.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello, World'
    };
  }

  render() {
    return (
      <div>
        {this.state.greeting} 
        <img src={reactImage} alt=""/>
      </div>
    )
  }
}
