import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventsNumber: '32',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      eventsNumber: value,
    });
  };

  render() {
    return (
      <div className="number-of-events">
        <label>
          Number of Events:
          <input
            type="number"
            className="number-of-events-input"
            value={this.state.eventsNumber}
            onChange={this.handleInputChanged}
          />
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;
