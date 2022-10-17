import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render element', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('render input for number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(
      1
    );
  });

  test('render default input for number of events of 32', () => {
    expect(
      NumberOfEventsWrapper.find('.number-of-events-input').prop('value')
    ).toBe('32');
  });

  test('render change of input for number of events to 16', () => {
    const eventObject = { target: { value: '16' } };
    NumberOfEventsWrapper.find('.number-of-events-input').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('eventsNumber')).toBe('16');
  });
});
