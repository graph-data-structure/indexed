[js-graph-indexed](http://make-github-pseudonymous-again.github.io/js-graph-indexed)
==

indexed graph code bricks for JavaScript

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-graph-indexed/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-graph-indexed.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-indexed)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-graph-indexed.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-graph-indexed)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-graph-indexed)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-graph-indexed)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-indexed#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-indexed#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-indexed)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-graph-indexed.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-indexed)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-graph-indexed.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-graph-indexed/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-indexed.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-indexed)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-graph-indexed
# or
jspm install npm:@aureooms/js-graph-indexed
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-indexed
```

### bower
```terminal
bower install @aureooms/js-graph-indexed
```

### ender
```terminal
ender add @aureooms/js-graph-indexed
```

### jam
```terminal
jam install @aureooms/js-graph-indexed
```

### spm
```terminal
spm install @aureooms/js-graph-indexed --save
```

### npm
```terminal
npm install @aureooms/js-graph-indexed --save
```

## Require
### jspm
```js
let graphindexed = require( "github:aureooms/js-graph-indexed" ) ;
// or
import graphindexed from '@aureooms/js-graph-indexed' ;
```
### duo
```js
let graphindexed = require( "aureooms/js-graph-indexed" ) ;
```

### component, ender, spm, npm
```js
let graphindexed = require( "@aureooms/js-graph-indexed" ) ;
```

### bower
The script tag exposes the global variable `graphindexed`.
```html
<script src="bower_components/@aureooms/js-graph-indexed/js/dist/graph-indexed.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-graph-indexed" ] , function ( graphindexed ) { ... } ) ;
```