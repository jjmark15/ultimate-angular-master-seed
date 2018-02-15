function ContactsController ($filter, $state) {
  var ctrl = this;

  ctrl.$onInit = function () {
    var contacts = ctrl.contacts; // from firebase array
    ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);
  }

  ctrl.goToContact = function (event) {
    $state.go('contact', {
      id: event.contactId
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);