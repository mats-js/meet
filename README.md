# Meet App

A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Key features:

### 1. Filter events by city.

- **User Story**: As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.
- **Scenario 1**: When user hasn’t searched for a city, show upcoming events from all cities.
  - **Given** user hasn’t searched for any city
  - **When** the user opens the app
  - **Then** the user should see a list of all upcoming events
- **Scenario 2**: User should see a list of suggestions when they search for a city.
  - **Given** the main page is open
  - **When** user starts typing in the city textbox
  - **Then** the user should see a list of cities (suggestions) that match what they’ve typed
- **Scenario 3**: User can select a city from the suggested list.
  - **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
  - **When** the user selects a city (e.g., “Berlin, Germany”) from the list
  - **Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### 2. Show/hide event details.

- **User Story**: As a user, I should be able to show/hide event details so that I can see more/less information about an event.
- **Scenario 1**: An event element is collapsed by default.
  - **Given** the list of events is open
  - **When** the user scrolls through the list of events
  - **Then** all event details should be hidden
- **Scenario 2**: User can expand an event to see its details.
  - **Given** the list of events is open
  - **When** the user clicks on an event
  - **Then** the event details of said event should be shown
- **Scenario 3**: User can collapse an event to hide its details.
  - **Given** the user has previously expanded an event to see its details
  - **When** the user clicks on the hide button
  - **Then** the event details of said event should be hidden

### 3. Specify number of events.

- **User Story**: As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- **Scenario 1**: When user hasn’t specified a number, 32 is the default number
  - **Given** the user has not specified a number of events to be displayed
  - **When** the user opens the app
  - **Then** the user should see a maximum of 32 events by default
- **Scenario 2**: User can change the number of events they want to see
  - **Given** A list of events is open
  - **When** the user changes the number of events to be displayed
  - **Then** the list should update to the specified number of events

### 4. Use the app when offline.

- **User Story**: As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.
- **Scenario 1**: Show cached data when there’s no internet connection
  - **Given** The user's device has no internet connection
  - **When** the user opens the app
  - **Then** previously cached data should be displayed
- **Scenario 2**: Show error when user changes the settings (city, time range)
  - **Given** The user's device has no internet connection
  - **When** the user changes settings such as city or time range
  - **Then** an error message should be displayed, informing the user that internet access is required

### 5. Add an app shortcut to the home screen.

- **User Story**: As a user, I should be able to add the app shortcut to my home screen so that I can open the app faster.

### 6. View a chart showing the number of upcoming events by city.

- **User Story**: As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
- **Scenario 1**: Show a chart with the number of upcoming events in each city

  - **Given** the user hasn’t searched for any city
  - **When** the user opens the app
  - **Then** a chart with upcoming events by city should by shown

Technologies used: JavaScript, React, OAuth2, Google Calendar API, AWS lambda

Deployed app link: tbu
