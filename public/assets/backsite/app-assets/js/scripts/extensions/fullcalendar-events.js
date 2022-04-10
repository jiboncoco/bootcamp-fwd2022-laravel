/*=========================================================================================
    File Name: fullcalendar.js
    Description: Fullcalendar
    --------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


$(document).ready(function () {

  /************************************************
   *				Background Events				*
   ************************************************/
  var calendarE4 = document.getElementById('fc-bg-events');
  var fcBgEvents = new FullCalendar.Calendar(calendarE4, {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    defaultDate: '2016-06-12',
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    plugins: ['dayGrid', 'timeGrid', "interaction"],
    editable: true,
    events: [{
        title: 'Business Lunch',
        start: '2016-06-03T13:00:00',
        constraint: 'businessHours'
      },
      {
        title: 'Meeting',
        start: '2016-06-13T11:00:00',
        constraint: 'availableForMeeting', // defined below
        color: '#257e4a'
      },
      {
        title: 'Conference',
        start: '2016-06-18',
        end: '2016-06-20',
      },
      {
        title: 'Party',
        start: '2016-06-29T20:00:00'
      },

      // areas where "Meeting" must be dropped
      {
        id: 'availableForMeeting',
        start: '2016-06-11T10:00:00',
        end: '2016-06-11T16:00:00',
        rendering: 'background'
      },
      {
        id: 'availableForMeeting',
        start: '2016-06-13T10:00:00',
        end: '2016-06-13T16:00:00',
        rendering: 'background'
      },

      // red areas where no events can be dropped
      {
        start: '2016-06-24',
        end: '2016-06-28',
        overlap: false,
        rendering: 'background',
        color: '#EB98A0'
      },
      {
        start: '2016-06-06',
        end: '2016-06-08',
        overlap: false,
        rendering: 'background',
        color: '#EB98A0'
      }
    ]
  });

  fcBgEvents.render();

  // /********************************************
  // *				Events Colors				*
  // ********************************************/
  var calendarE5 = document.getElementById('fc-event-colors');
  var fcEventColors = new FullCalendar.Calendar(calendarE5, {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    defaultDate: '2016-06-12',
    businessHours: true, // display business hours
    navLinks: true, // can click day/week names to navigate views
    plugins: ['dayGrid', 'timeGrid', "interaction"],
    editable: true,
    events: [{
        title: 'All Day Event',
        start: '2016-06-01',
        color: '#967ADC'
      },
      {
        title: 'Long Event',
        start: '2016-06-07',
        end: '2016-06-10',
        color: '#37BC9B'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-06-09T16:00:00',
        color: '#37BC9B'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-06-16T16:00:00',
        color: '#F6BB42'
      },
      {
        title: 'Conference',
        start: '2016-06-11',
        end: '2016-06-13',
        color: '#EB98A0'
      },
      {
        title: 'Meeting',
        start: '2016-06-12T10:30:00',
        end: '2016-06-12T12:30:00',
        color: '#EB98A0'
      },
      {
        title: 'Lunch',
        start: '2016-06-12T12:00:00',
        color: '#EB98A0'
      },
      {
        title: 'Meeting',
        start: '2016-06-12T14:30:00',
        color: '#EB98A0'
      },
      {
        title: 'Happy Hour',
        start: '2016-06-12T17:30:00',
        color: '#EB98A0'
      },
      {
        title: 'Dinner',
        start: '2016-06-12T20:00:00',
        color: '#EB98A0'
      },
      {
        title: 'Birthday Party',
        start: '2016-06-13T07:00:00',
        color: '#EB98A0'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-06-28',
        color: '#3BAFDA'
      }
    ]
  });

  fcEventColors.render();

});
