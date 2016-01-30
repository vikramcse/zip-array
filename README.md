# zip-array
A javascript equivalent of Python's zip function;
Merges together the values of each of the arrays.

Install the module with: `npm install zip-array`

## Example

```javascript
var zip = require('zip-array').zip;
var result = zip([1, 2], ['a', 'b']);
console.log(result); 
// -> [ [ 1, 'a' ], [ 2, 'b' ] ]

var zip = require('zip-array').zip_longest;
var result = zip([1, 2, 3], [1, 2], [11])
console.log(result); 
// -> [ [ 1, 1, 11 ], [ 2, 2, undefined ], [ 3, undefined, undefined ] ]
```
