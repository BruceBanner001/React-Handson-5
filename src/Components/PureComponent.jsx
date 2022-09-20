import React, { Component } from 'react';
import './style.css';

class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Subramanian",
    };
  }

  changeName = () => {

    this.setState({ name: "Divagar" })
  };

  render() {
    return (
      <div>
        <p className='pure'>Name : <span id='pureComponentNameTag'>{this.state.name}</span></p>
        <button onClick={this.changeName}>Change Name</button>

      </div>
    )
  }

}
export default PureComponent;