!function (name, context, definition) {
  if (typeof define == 'function') define(definition)
  else if (typeof module != 'undefined') module.exports = definition()
  else context[name] = definition()
}('qmark', this, function () {

  /**
   * Parses value of query string parameter.
   * @param {string} name of the target parameter.
   * @returns {string} value of given query param.
   */
  return function (name) { //TODO (david) put this in a module w/ its own tests.
    var queryString = {}
    window.location.href.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { queryString[$1] = $3 }
    )
    return name ? queryString[name] : queryString
  }

})