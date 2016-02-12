# zip-array
A javascript equivalent of Python's zip function. Merges together the values of each of the arrays.

# Install
```sh
$ npm install --save zip-array
```

## Examples
```js
var zip = require('zip-array').zip;
var result = zip([1, 2], ['a', 'b']);
console.log(result); 
// -> [ [ 1, 'a' ], [ 2, 'b' ] ]

var zip = require('zip-array').zip_longest;
var result = zip([1, 2, 3], [1, 2], [11])
console.log(result); 
// -> [ [ 1, 1, 11 ], [ 2, 2, undefined ], [ 3, undefined, undefined ] ]
```

## Usage

#### `require('zip-array)([array]...).zip`

**Arguments**:
- `[array...]`: list of arrays

**Returns**: Returns a list of arrays, where the i-th array contains the i-th Pelement from each of the argument sequences.
The returned list is truncated in length to the length of the **shortest argument array**.

#### `require('zip-array)([array]...).zip_longest`

**Arguments**:
- `[array...]`: list of arrays

**Returns**: Returns a list of arrays, where the i-th array contains the i-th Pelement from each of the argument sequences.
The returned list is truncated in length to the length of the **longest argument array**, and adds **undefined** where match is not found

## License

&copy; 2016 vikram. MIT License