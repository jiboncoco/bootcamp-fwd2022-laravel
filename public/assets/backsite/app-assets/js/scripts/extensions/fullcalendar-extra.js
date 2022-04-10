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
	*				json				*
	************************************/
	var calendarE8 = document.getElementById('fc-json');
    var fcJson = new FullCalendar.Calendar(calendarE8, {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		defaultDate: '2016-06-12',
		editable: true,
		plugins: ["dayGrid", "timeGrid", "interaction"],
		eventLimit: true, // allow "more" link when too many events
		events: {
			url: '../../../app-assets/data/fullcalendar/php/get-events.php',
			error: function() {
				$('#script-warning').show();
			}
		},
		loading: function(bool) {
			$('#loading').toggle(bool);
		}
	});

	fcJson.render();

	/****************************************
	*				Languages				*
	****************************************/
	var initialLocaleCode = 'en';
	var localeSelectorEl = document.getElementById('lang-selector');
	var calendarE8 = document.getElementById('fc-languages');
    var fcLanguages = new FullCalendar.Calendar(calendarE8, {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		defaultDate: '2016-06-12',
		locale: initialLocaleCode,
		buttonIcons: false, // show the prev/next text
		weekNumbers: true,
		plugins: ["dayGrid", "timeGrid", "interaction"],
		navLinks: true, // can click day/week names to navigate views
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

	fcLanguages.render();

	// build the language selector's options
	// build the locale selector's options
    fcLanguages.getAvailableLocaleCodes().forEach(function(localeCode) {
		var optionEl = document.createElement('option');
		optionEl.value = localeCode;
		optionEl.selected = localeCode == initialLocaleCode;
		optionEl.innerText = localeCode;
		localeSelectorEl.appendChild(optionEl);
	  });

	  // when the selected option changes, dynamically change the calendar option
	  localeSelectorEl.addEventListener('change', function() {
		if (this.value) {
			fcLanguages.setOption('locale', this.value);
		}
	  });


	/****************************************
	*				Time Zones				*
	****************************************/
	/****************************************
	*				Time Zones				*
	****************************************/
	var initialTimeZone = 'local';
	var calendarE9 = document.getElementById('fc-timezones');
    var fcTimezones = new FullCalendar.Calendar(calendarE9, {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		defaultDate: '2016-06-12',
		plugins: ["dayGrid", "timeGrid", "interaction", "momentTimezone"],
		editable: true,
		navLinks: true, // can click day/week names to navigate views
		timeZone: initialTimeZone,
		selectable: true,
		eventLimit: true, // allow "more" link when too many events
		events: {
			url: '../../../app-assets/data/fullcalendar/php/get-events.php',
			failure: function() {
				document.getElementById('script-warning').style.display = 'inline'; // show
			}
		},
		eventTimeFormat: { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' },
		dateClick: function(arg) {
			console.log('dateClick', fcTimezones.formatIso(arg.date));
		},
		select: function(arg) {
			console.log('select', fcTimezones.formatIso(arg.start), fcTimezones.formatIso(arg.end));
		}
	});

	fcTimezones.render();

	// load the list of available timezones, build the <select> options
	$.getJSON('../../../app-assets/data/fullcalendar/php/get-timezones.php', function(timezones) {
		$.each(timezones, function(i, timezone) {
			if (timezone != 'UTC') { // UTC is already in the list
				$('#timezone-selector').append(
					$("<option/>").text(timezone).attr('value', timezone)
				);
			}
		});
	});

	// when the timezone selector changes, dynamically change the calendar option
	calendarE9.addEventListener('change', function() {
		fcTimezones.setOption('timeZone', this.value);
	});
});
