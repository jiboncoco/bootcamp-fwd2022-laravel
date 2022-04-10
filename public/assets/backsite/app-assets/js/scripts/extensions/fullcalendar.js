/*=========================================================================================
    File Name: fullcalendar.js
    Description: Fullcalendar
    --------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


$(document).ready(function(){

	/************************************
	*				Default				*
	************************************/
	var calendarEl = document.getElementById('fc-default');
    var fcCalendar = new FullCalendar.Calendar(calendarEl, {
		defaultDate: '2016-06-12',
		editable: true,
		plugins: ["dayGrid", "interaction"],
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

	fcCalendar.render();

	/****************************************
	*				Basic Views				*
	****************************************/
	var calendarE2 = document.getElementById('fc-basic-views');
    var fcBasicViews = new FullCalendar.Calendar(calendarE2, {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		defaultDate: '2016-06-12',
		editable: true,
		plugins: ["dayGrid", "timeGrid", "interaction"],
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

	fcBasicViews.render();

	/********************************************
	*				Agenda Views				*
	********************************************/
	var calendarE3 = document.getElementById('fc-agenda-views');
    var fcAgendaViews = new FullCalendar.Calendar(calendarE3, {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: "dayGridMonth,timeGridWeek,timeGridDay"
		},
		defaultDate: '2016-06-12',
		editable: true,
		plugins: ["dayGrid", "timeGrid", "interaction"],
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

	fcAgendaViews.render();

});
