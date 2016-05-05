# `String.prototype.charCodeAt()`

## Introduction

`String.prototype` represents the prototype object of the global `String` object.

Instances of the global `String` object **has access** to the prototype object.

In other words, all instances of the global `String` object inherits from `String.prototype`.

The string prototype object comes with many native methods that are useful for string manipulation namely `String.prototype.toLowerCase()`, `String.prototype.toUpperCase()`, `String.prototype.charAt()` and many more.

Most native methods have name that are rather verbose, for example the native method `String.prototype.toLowerCase()`. By just looking at the name of the method  `.toLowerCase()`, we can know it's purpose - i.e. it converts the character within a string to lower case.

## Description

When a string calls the method `.charCodeAt()`, it returns a numeric value, which is the Unicode value of the character at the position specified.

## Syntax

```js
str.charCodeAt(index)
```

###Parameters

####index
Number representing the position in the string of the character of which the code should be returned.

The number corresponding to the first character in the string is 0, 1 to the second, and so on.

If it is not a number, it defaults to 0.

### Return Value
Integer between 0 and 65535 representing the Unicode value of the charachter at the position specified by *index*.

If *index* exceeds the length of the string or is less than 0, it returns `NaN`.

## Usage Examples

Return the Unicode value of the first character in a string:

```js
//Unicode value of 'h'
'hello world!'.charCodeAt(0) // 104

//index defaults to 0 if it is not a number
'hello world!'.charCodeAt('hi') // 104
```

Return the Unicode value of the last character in a string:

```js
var str = 'hello world!'

//Unicode value of '!'
str.charCodeAt(str.length - 1) // 68
```

##Special Notes
`.charCodeAt()` can return the first code unit of a surrogate pair if the code point corresponds to a supplementary plane. For more information about Unicode visit [Unicode Wikipedia Article](https://en.wikipedia.org/wiki/Unicode).

##Browser Support

- Chrome: yes
- Firefox: yes
- Internet Explorer: yes
- Opera: yes
- Safari: yes