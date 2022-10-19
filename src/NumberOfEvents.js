import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    textWarning: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const warning = value < 1 ? 'Please enter a number greater than 0' : '';
    this.setState({
      numberOfEvents: value,
      textWarning: warning,
    });

    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div>
        <div className="number-of-events">
          <label>
            Number of Events:
            <input
              type="number"
              className="number-of-events-input"
              min="1"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </label>
        </div>
        <p>{this.state.textWarning}</p>
      </div>
    );
  }
}

export default NumberOfEvents;
