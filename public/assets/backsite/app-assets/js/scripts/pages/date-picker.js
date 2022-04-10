//Basic Date Picker
// -----------------------
$('.datepicker').pickdate();

// Customised Date Pickers
// -----------------------
$('.customised_datepicker').pickdate({
  cancel           : 'Clear',
  closeOnCancel    : false,
  closeOnSelect    : true,
  container        : 'body',
  containerHidden  : 'body',
  firstDay         : 1,
  format           : 'You selecte!d: dddd, d mm, yy',
  formatSubmit     : 'dd/mmmm/yyyy',
  hiddenPrefix     : 'prefix_',
  hiddenSuffix     : '_suffix',
  labelMonthNext   : 'Go to the next month',
  labelMonthPrev   : 'Go to the previous month',
  labelMonthSelect : 'Choose a month from the dropdown menu',
  labelYearSelect  : 'Choose a year from the dropdown menu',
  ok               : 'Close',
  onClose          : function () {
    console.log('Datepicker closes')
  },
  onOpen           : function () {
    console.log('Datepicker opens')
  },
  selectMonths     : true,
  selectYears      : 10,
  today            : 'Today'
});

//Date Limit 
// -----------------------
$('.datepicker-limit').pickdate({
  // Default is `false` which removes any limits. `true` sets it to today.
  max: true,
  // An integer (negative or positive) sets it relative to today.
  min: -10
});

//Date Limit using Javascript Date
// -----------------------
$('.datepicker-limit-script').pickdate({
  max: new Date(2016,1,13),
  min: new Date(2016,0,3)
});


//Disable Dates
// -----------------------
$('.datepicker-disable').pickdate({
  disable: [
    new Date(2018,11,16),
    new Date(2018,11,20),
    [2018,11,24]
  ]
});

//Disable Dates Using integers as days of the week
// -----------------------
$('.datepicker-disable-week').pickdate({
   disable: [
    1, 2, 3
  ]
});

//Disable Date range 
// -----------------------
$('.datepicker-disable-range').pickdate({
   disable: [
    { from: new Date(2018,11,16), to: [2018,11,24] }
  ]
});

//Disable Date range in negative
// -----------------------
$('.datepicker-disable-negative').pickdate({
   disable: [
   { from: -10, to: true }
  ]
});

//Disable Date range in positive
// -----------------------
$('.datepicker-disable-positive').pickdate({
   disable: [
   { from: [2018,11,16], to: 10 }
  ]
});
