'use strict';

(function ()
{
  var _fetch = window.fetch;
  window.fetch = undefined;
  window._fetch = _fetch;
})();
