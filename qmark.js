/**
 * qMark! A blazing fast query string parser
 * (c) Bloglovin 2013
 * https://github.com/bloglovin/qmark
 * license MIT
 */

!function (name, context, definition) {

}('qmark', this, function () {

  /**
   * Parses value of query string parameter.
   * @param {string} name of the target parameter.
   * @returns {string} value of given query param.
   */
  var getQueryParam = function (name) { //TODO (david) put this in a module w/ its own tests.
    var queryString = {}
    window.location.href.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { queryString[$1] = $3 }
    )
    return name ? queryString[name] : queryString
  }

  return getQueryParam

})