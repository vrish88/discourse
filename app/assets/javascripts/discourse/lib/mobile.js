/**
  A class that is responsible for logic related to mobile devices.

  @class Mobile
  @namespace Discourse
  @module Discourse
**/
Discourse.Mobile = {

  mobileView: false,

  init: function() {
    var $html = $('html');
    this.mobileView = $html.hasClass('mobile-view');
  },

  toggleMobileView: function() {
    if (localStorage) {
      localStorage.mobileView = !this.mobileView;
    }
    this.reloadPage(!this.mobileView);
  },

  reloadPage: function(mobile) {
    window.location.assign(window.location.pathname + '?mobile_view=' + (mobile ? '1' : '0'));
  }
};
