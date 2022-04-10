/*=========================================================================================
    File Name: fullcalendar.js
    Description: Fullcalendar
    --------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


$(document).ready(function(){
  /************************************************
    *               External Dragging               *
    ************************************************/

    /* initialize the calendar
    -----------------------------------------------------------------*/

    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable;

    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('fc-external-drag');
    var checkbox = document.getElementById('drop-remove');

    // initialize the calendar
    // -----------------------------------------------------------------
    var calendar = new Calendar(calendarEl, {
        header: {
            left: 'prev,next today',
            center: 'title',
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        editable: true,
        plugins: ["dayGrid", "timeGrid", "interaction"],
        droppable: true, // this allows things to be dropped onto the calendar
        defaultDate: '2019-01-01',
        events: [
        {
            title: 'All Day Event',
            start: '2019-01-01',
            color:'#009688'
        },
        {
            title: 'Long Event',
            start: '2019-01-07',
            end: '2019-01-10',
            color:'#4CAF50'
        },
        {
            id: 999,
            title: 'Meeting',
            start: '2019-01-09T16:00:00',
            color:  '#00bcd4'
        },
        {
            id: 999,
            title: 'Happy Hour',
            start: '2019-01-16T16:00:00',
            color:'#3f51b5'
        },
        {
            title: 'Conference Meeting',
            start: '2019-01-11',
            end: '2019-01-13',
            color:'#e51c23'
        },
        {
            title: 'Meeting',
            start: '2019-01-12T10:30:00',
            end: '2019-01-12T12:30:00',
            color:'#00bcd4'
        },
        {
            title: 'Dinner',
            start: '2019-01-12T20:00:00',
            color:'#4a148c'
        },
        {
            title: 'Birthday Party',
            start: '2019-01-13T07:00:00',
            color:'#ff5722'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2019-01-28',
        }
    ],
        drop: function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
            // if so, remove the element from the "Draggable Events" list
            info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
        }
    });
    calendar.render()

    $('#external-events .fc-event').each(function () {
        // Different colors for events
        $(this).css({ 'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color') });
    });

    var colorData;
    $('#external-events .fc-event').mousemove(function(){
    colorData = $(this).data('color');
    })
    new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
            return {
            title: eventEl.innerText,
            color: colorData
            };
        }
    });


    /****************************************
    *				Selectable				*
    ****************************************/
    var calendarE6 = document.getElementById('fc-selectable');
    var fcSelectable = new FullCalendar.Calendar(calendarE6, {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      defaultDate: '2016-06-12',
      selectable: true,
      plugins: ["dayGrid", "timeGrid", "interaction"],
      selectHelper: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
          fcSelectable.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        fcSelectable.unselect()
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-06-01'
        },
        {
          title: 'Long Event',
          start: '2016-06-07',
          end: '2016-06-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-06-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-06-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-06-11',
          end: '2016-06-13'
        },
        {
          title: 'Meeting',
          start: '2016-06-12T10:30:00',
          end: '2016-06-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-06-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-06-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-06-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-06-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-06-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-06-28'
        }
      ]
    });

    fcSelectable.render();

  });
