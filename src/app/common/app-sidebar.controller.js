function AppSidebarController() {
  var ctrl = this;
  ctrl.contactTags = [{
    label: 'All contacts',
    icon: 'star'
  }, {
    label: 'Friends',
    icon: 'people'
  }, {
    label: 'Family',
    icon: 'child_care'
  }, {
    label: 'Acquaintances',
    icon: 'accessibility'
  }, {
    label: 'Following',
    icon: 'remove_red_eye'
  }, {
    label: 'Work',
    icon: 'insert_chart'
  }];
};

angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);