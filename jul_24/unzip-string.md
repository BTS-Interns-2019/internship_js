# Unzip string
As a developer I wan't to have a function that receives a zipped string and returns me the original unzipped string.

## Acceptance Criteria
* The input string can contain any character.
* When a numeric value (x) appears it indicates that the following characters will be repeated `x` number of times each one until a new numeric value appears.
* A numeric value is one digit only `[0-9]`

## Tech requirements
* The function must be named unzipString.
* The function should be in a file called `unzip-string_<yourname>.js`
* At the end of the file you *must add* `module.exports = unzipString;`

## Examples
```
'3D2a5d2f' >> 'DDDaadddddff'
'3d332f2a' >> 'dddffaa'
'abcd'     >> 'abcd'
''         >> ''
```