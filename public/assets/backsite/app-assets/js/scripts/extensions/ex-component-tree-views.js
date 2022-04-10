/*=========================================================================================
    File Name: ex-component-tree-views.js
    Description: Bootstrap Tree View
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {
  // color variable define here
  var $primary = '#5A8DEE',
    $danger = '#FF5B5C',
    $warning = '#FDAC41',
    $primary_light = '#6999f3',
    $warning_light = '#FFEED9',
    $dark_primary = '#2c6de9',
    $hover_warning = '#fed8a6',
    $white = '#fff';

  // a default data nested arrary for treeview
  var defaultData = [{
      text: 'Parent 1',
      href: '#parent1',
      tags: ['4'],
      nodes: [{
          text: 'Child 1',
          href: '#child1',
          tags: ['2'],
          nodes: [{
              text: 'Grandchild 1',
              href: '#grandchild1',
              tags: ['0']
            },
            {
              text: 'Grandchild 2',
              href: '#grandchild2',
              tags: ['0']
            }
          ]
        },
        {
          text: 'Child 2',
          href: '#child2',
          tags: ['0']
        }
      ]
    },
    {
      text: 'Parent 2',
      href: '#parent2',
      tags: ['0']
    },
    {
      text: 'Parent 3',
      href: '#parent3',
      tags: ['0']
    }, {
      text: 'Parent 4',
      href: '#parent4',
      tags: ['0']
    }, {
      text: 'Parent 5',
      href: '#parent5',
      tags: ['0']
    }
  ];
  // a alternateData  nested arrary for treeview
  var alternateData = [{
    text: 'Parent 1',
    tags: ['2'],
    nodes: [{
      text: 'Child 1',
      tags: ['2'],
      nodes: [{
        text: 'Grandchild 1',
        tags: ['0']
      }, {
        text: 'Grandchild 2',
        tags: ['0']
      }]
    }, {
      text: 'Child 2',
      tags: ['3']
    }]
  }, {
    text: 'Parent 2',
    tags: ['7']
  }, {
    text: 'Parent 3',
    icon: 'feather icon-map',
    href: '#demo',
    tags: ['11']
  }, {
    text: 'Parent 4',
    icon: 'feather icon-download-cloud',
    href: '/index.html',
    tags: ['19'],
    selected: true
  }, {
    text: 'Parent 5',
    icon: 'feather icon-message-square',
    color: [$white],
    backColor: '#FDAC41',
    href: 'http://www.pixinvent.com',
    tags: ['0', 'available']
  }];

  //a json data for json treeview option
  var json = '[' +
    '{' +
    '"text": "Parent 1",' +
    '"nodes": [' +
    '{' +
    '"text": "Child 1",' +
    '"nodes": [' +
    '{' +
    '"text": "Grandchild 1"' +
    '},' +
    '{' +
    '"text": "Grandchild 2"' +
    '}' +
    ']' +
    '},' +
    '{' +
    '"text": "Child 2"' +
    '}' +
    ']' +
    '},' +
    '{' +
    '"text": "Parent 2"' +
    '},' +
    '{' +
    '"text": "Parent 3"' +
    '},' +
    '{' +
    '"text": "Parent 4"' +
    '},' +
    '{' +
    '"text": "Parent 5"' +
    '}' +
    ']';


  // Default Treeview options define here
  $('#default-treeview').treeview({
    selectedBackColor: [$primary],
    data: defaultData
  });

  // Collapsed Treeview options define here
  $('#collapsed-treeview').treeview({
    selectedBackColor: [$primary],
    levels: 1,
    data: defaultData
  });

  // Epanded Treeview options define here
  $('#expanded-treeview').treeview({
    selectedBackColor: [$primary],
    levels: 99,
    data: defaultData
  });

  //  Color treeview options define here
  $('#primary-color-treeview').treeview({
    selectedBackColor: [$primary],
    color: [$danger],
    data: defaultData
  });

  // Custom Icons options define here
  $('#custom-icon-treeview').treeview({
    selectedBackColor: [$primary],
    color: [$primary],
    expandIcon: 'feather icon-chevron-right',
    collapseIcon: 'feather icon-chevron-down',
    nodeIcon: 'feather icon-bookmark',
    data: defaultData
  });

  // Tags as Badges options define here
  $('#tags-badge-treeview').treeview({
    selectedBackColor: [$primary],
    color: [$primary],
    expandIcon: "feather icon-stop-circle",
    collapseIcon: "feather icon-check-square",
    nodeIcon: "feather icon-user",
    showTags: true,
    data: defaultData
  });

  // No Border options define here
  $('#no-border-treeview').treeview({
    selectedBackColor: [$primary],
    color: [$primary],
    showBorder: false,
    data: defaultData
  });


  // Colorful options define here
  $('#colorful-treeview').treeview({
    expandIcon: "feather icon-stop-circle",
    collapseIcon: "feather icon-check-square",
    nodeIcon: "icon-head",
    color: [$white],
    backColor: [$primary],
    onhoverColor: [$primary_light],
    borderColor: [$primary],
    showBorder: false,
    showTags: true,
    highlightSelected: true,
    selectedColor: [$white],
    selectedBackColor: [$dark_primary],
    data: defaultData
  });

  // Node Overrides options define here
  $('#node-override-treeview').treeview({
    expandIcon: "feather icon-stop-circle",
    collapseIcon: "feather icon-check-square",
    nodeIcon: "icon-head",
    color: [$warning],
    backColor: [$warning_light],
    onhoverColor: [$hover_warning],
    borderColor: [$warning_light],
    showBorder: false,
    highlightSelected: true,
    showTags: true,
    selectedColor: [$white],
    selectedBackColor: [$warning],
    data: alternateData
  });

  // Link Enabled options define here
  $('#link-enabled-treeview').treeview({
    selectedBackColor: [$primary],
    color: [$primary],
    enableLinks: true,
    data: defaultData
  });

  // Disabled Tree options define here
  var $disabledTree = $('#disabled-treeview').treeview({
    selectedBackColor: [$primary],
    data: defaultData
  });

  // disabale all btn's method fire here
  $('#btn-disable-all').on('click', function (e) {
    $disabledTree.treeview('disableAll', {
      silent: $('#chk-disable-silent').is(':checked')
    });
  });
  // enable all btn's method fire here
  $('#btn-enable-all').on('click', function (e) {
    $disabledTree.treeview('enableAll', {
      silent: $('#chk-disable-silent').is(':checked')
    });
  });

  // json data treeview options define here
  var $tree = $('#data-treeview').treeview({
    selectedBackColor: [$primary],
    color: [$primary],
    data: json
  });
  // Searchable Tree options define here
  var $searchableTree = $('#searchable-tree').treeview({
    selectedBackColor: [$primary],
    color: [$primary],
    showBorder: true,
    data: defaultData,
  });
  // Searchable Tree's search and checkbox value save into variable here
  var search = function (e) {
    var pattern = $('#input-search').val();
    var options = {
      ignoreCase: $('#chk-ignore-case').is(':checked'),
      exactMatch: $('#chk-exact-match').is(':checked'),
      revealResults: $('#chk-reveal-results').is(':checked')
    };
    // seachable tree checkbox and search value pass here
    var results = $searchableTree.treeview('search', [pattern, options]);
    // Searchable Tree's search Output  print into html
    var output = '<p>' + results.length + ' matches found</p>';
    $.each(results, function (index, result) {
      output += '<p>- ' + result.text + '</p>';
    });
    $('#search-output').html(output);
  }
  // Searchable Tree's seach btn's action define here
  $('#btn-search').on('click', search);
  $('#input-search').on('keyup', search);
  // Searchable Tree's  clear btn's  action define here
  $('#btn-clear-search').on('click', function (e) {
    $searchableTree.treeview('clearSearch');
    $('#input-search').val('');
    $('#search-output').html('');
  });

  //         Expand & Collapse All      //
  // --------------------------------------

  // Expand / Collapse All options define here
  var $expandibleTree = $('#expandible-tree').treeview({
    selectedBackColor: [$primary],
    data: defaultData,
  });

  // Expand btn's method fire here
  $('#btn-expand-all').on('click', function (e) {
    var levels = $('#select-expand-all-levels').val();
    $expandibleTree.treeview('expandAll', {
      levels: 2
    });
  });
  //  Collapse btn's methode fire here
  $('#btn-collapse-all').on('click', function (e) {
    $expandibleTree.treeview('collapseAll');
  });

  //         Check and Uncked All    //
  // ----------------------------------

  // Check / Uncheck All's options define
  var $checkableTree = $('#checkable-tree').treeview({
    selectedBackColor: [$primary],
    data: defaultData,
    showIcon: false,
    showCheckbox: true,
  });

  // check all btn's methode fire here
  $('#btn-check-all').on('click', function (e) {
    $checkableTree.treeview('checkAll', {
      silent: $('#chk-check-silent').is(':checked')
    });
  });
  //uncheck all btn's methode fire here
  $('#btn-uncheck-all').on('click', function (e) {
    $checkableTree.treeview('uncheckAll', {
      silent: $('#chk-check-silent').is(':checked')
    });
  });
});
