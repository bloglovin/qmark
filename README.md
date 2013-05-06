# qMark
A blazing fast query string parser.
## API
### With Ender ...
```javascript
  // Assume the url is bloglovin.com?name="FashionSquad"&id=123
  $.qmark('name') // FashionSquad
  $.queryParam('id') // 123

```

### Or on its own ...
```javascript
  qmark('name') // FashionSquad
  qmark('id') // 123

```