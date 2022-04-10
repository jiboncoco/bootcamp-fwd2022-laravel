/*=========================================================================================
	File Name: scrollable.js
	Description: scrollabr intialisations
	----------------------------------------------------------------------------------------
	Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {
  // Vertical Scroll
  var vertical_scroll = new PerfectScrollbar(".vertical-scroll", {
    wheelPropagation: true
  });

  // Horizontal Scroll
  var horizontal_scroll = new PerfectScrollbar(".horizontal-scroll", {
    wheelPropagation: true
  });

  // Both Side Scroll
  var both_side_scroll = new PerfectScrollbar(".both-side-scroll", {
    wheelPropagation: true
  });

  // Always Visible Scroll
  var visible_scroll = new PerfectScrollbar(".visible-scroll", {
    wheelPropagation: true
  });

  // Minimum Scroll Length
  var min_scroll_length = new PerfectScrollbar(".min-scroll-length", {
    minScrollbarLength: 200,
    wheelPropagation: true
  });

  // Scrollbar Margins
  var scrollbar_margins = new PerfectScrollbar(".scrollbar-margins", {
    minScrollbarLength: 200,
    wheelPropagation: true
  });

  // Default Handlers
  var default_handlers = new PerfectScrollbar(".default-handlers", {
    wheelPropagation: true
  });

  // No Keyboard
  var no_keyboard = new PerfectScrollbar(".no-keyboard", {
    handlers: ['click-rail', 'drag-thumb', 'wheel', 'touch'],
    wheelPropagation: true
  });

  // Click and Drag
  var click_drag_handler = new PerfectScrollbar(".click-drag-handler", {
    handlers: ['click-rail', 'drag-thumb'],
    wheelPropagation: true
  });

  // Default Wheel Speed : 1
  var default_wheel_speed = new PerfectScrollbar(".default-wheel-speed", {
    wheelPropagation: true
  });

  // Higher Wheel Speed : 10
  var higher_wheel_speed = new PerfectScrollbar(".higher-wheel-speed", {
    wheelSpeed: 10,
    wheelPropagation: true
  });

  // Lower Wheel Speed : 10
  var lower_wheel_speed = new PerfectScrollbar(".lower-wheel-speed", {
    wheelSpeed: 0.1,
    wheelPropagation: true
  });
});
