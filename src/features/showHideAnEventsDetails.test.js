import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  // Scenario 1

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events is open', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user scrolls through the list of events', () => {});

    then('all event details should be hidden', () => {
      expect(AppWrapper.find('.event .details')).toHaveLength(0);
    });
  });

  // Scenario 2

  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the list of events is open', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user clicks on an event', () => {
      AppWrapper.update();
      AppWrapper.find('.event .show-details').at(0).simulate('click');
    });

    then('the event details of said event should be shown', () => {
      expect(AppWrapper.find('.event .details')).toHaveLength(1);
    });
  });

  // Scenario 3

  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given(
      'the user has previously expanded an event to see its details',
      async () => {
        AppWrapper = await mount(<App />);
        AppWrapper.update();
        AppWrapper.find('.event .show-details').at(0).simulate('click');
      }
    );

    when('the user clicks on the hide button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .hide-details').at(0).simulate('click');
    });

    then('the event details of said event should be hidden', () => {
      expect(AppWrapper.find('.event .details')).toHaveLength(0);
    });
  });
});
