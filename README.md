![npm](https://img.shields.io/npm/v/fast-array-of)
![NPM](https://img.shields.io/npm/l/fast-array-of)
![GitHub issues](https://img.shields.io/github/issues/zaven10/fast-array-of)
![GitHub top language](https://img.shields.io/github/languages/top/zaven10/fast-array-of)
![npms.io (final)](https://img.shields.io/npms-io/popularity-score/fast-array-of)
![npm](https://img.shields.io/npm/dw/fast-array-of)
![GitHub repo size](https://img.shields.io/github/repo-size/zaven10/fast-array-of)

![GitHub forks](https://img.shields.io/github/forks/zaven10/fast-array-of?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/zaven10/fast-array-of?style=social)

# fast-array-of
A fast, proxy-indexed array gives you the ability to create an array that is superior in performance when working with arrays.

`fast-array-of` is caches and indexes the data and returns the proxied value, which provides superiority over the standard arrays in js

Provides **fast**
- search by key
- adding a value to an array
- change of value by key
- deletion by key
- deletion of all values of an array

## Installation
```bash
$ npm i fast-array-of
```

## Usage
> `arrayOf` uses generic types. \
The first argument is a `unique key` that will be used for caching and further use, if it is not defined (`null`) then by default indexing starting from `0` will be used
```typescript
import { arrayOf, IArrayOf } from 'fast-array-of'

// primitive values
const arr: IArrayOf<number> = arrayOf<number>(null, 1, 2, 3, 4)

arr.findByKey(1) // return 2


// array of objects
interface User {
  id: number,
  age: number
  name: string
}

const arrOfObjects: IArrayOf<User> = arrayOf<User>('id', { id: 1, age: 15, name: 'first' }, { id: 2, age: 20, name: 'second' }, { id: 3, age: 43, name: 'third' })

arrOfObjects.findByKey(3) // return { id: 3, age: 43, name: 'third' }
```

## Methods / Properties

<!-- Disable table formatting because Prettier messing it up. -->
<!-- prettier-ignore -->
| Method / Property name                          | Description |
| ------------------------------------------------| ----------- |
| **Properties**                                  | |
| `length`                                        | Returned the length of the array. |
| **Methods**                                     | |
| `findByKey()`                                   | Finds a value by key. |
| `set()`                                         | Modifies the value by key if such exists or adds a new value if it does not exist. |
| `remove()`                                      | Removes a value by key. |
| `clear()`                                       | Clears the entire array. |


## Tests result
> approximate average data that varies within the specified limits when using an array with `10.000` elements

#### With `fast-array-of`
```
[Fast array find value]: key = 10000 (1)
  Timestamp: 0.211ms
[Fast array find value]: key = 10000 (2)
  Timestamp: 0.009ms
[Fast array set value]: key = 10000 (1)
  Timestamp: 0.048ms
[Fast array remove value]: key = 10000 (1)
  Timestamp: 0.051ms
```

#### With `js array`
```
[Array find value]: key = 10000 (1)
  Timestamp: 0.548ms
[Array find value]: key = 10000 (2)
  Timestamp: 0.329ms
[Array set value]: key = 10000 (1)
  Timestamp: 0.352ms
[Array remove value]: key = 10000 (1)
  Timestamp: 0.721ms
```
