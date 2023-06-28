// Google Calendar API Functions

// Function to list all calendars
function listAllCalendars() {
  var calendars = CalendarApp.getAllCalendars();
  for (var i = 0; i < calendars.length; i++) {
    logger.log(calendars[i].getName());
  }
}

// Function to create a new event
function createEvent(calendarId, eventTitle, eventDescription, eventStart, eventEnd) {
  var calendar = CalendarApp.getCalendarById(calendarId);
  calendar.createEvent(eventTitle, eventStart, eventEnd, {'description': eventDescription});
}

// Function to delete an event
function deleteEvent(calendarId, eventId) {
  var calendar = CalendarApp.getCalendarById(calendarId);
  var event = calendar.getEventById(eventId);
  event.delete();
}
