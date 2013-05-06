# qmark
A blazing fast query string parser.
## API
### With Ender ...
```javascript
  // Assume the url is bloglovin.com?name=FashionSquad&id=123
  $.qmark('name') // FashionSquad
  $.queryParam('id') // 123

```
### Or on its own ...
```javascript
  qmark('name') // FashionSquad
  qmark('id') // 123

```
## Tests
You can see tests by running `make test` and navigating to `http://localhost:8080/tests/tests.html` in your browser.