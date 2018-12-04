import React from 'react';
import reactImage from './images/react.png';

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
        <div className="container-fluid theme-showcase">
          <div className="main" role="main">
           <div className="row">
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              {this.state.greeting}
            </div>
            <div className="col-sm-7">
              {this.state.greeting}
            </div>
          </div>
          <div className="row">
              <p>
                <button type="button" className="btn btn-xs btn-default">Default</button>
                <button type="button" className="btn btn-sm btn-primary">Primary</button>
                <button type="button" className="btn btn-lg btn-outline-success">Success</button>
                <button type="button" className="btn btn-xl btn-info">Info</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-lg btn-danger">Danger</button>
                <button type="button" className="btn btn-lg btn-link">Link</button>
              </p>
              <div className="alert alert-primary" role="alert">
                A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}
