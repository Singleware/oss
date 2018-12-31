# Object Style Sheets

This package provides some classes to help you create CSS statements at runtime in a easy way.

## Usage

```ts
import * as OSS from '@singleware/oss';

const stylesheet = new OSS.Stylesheet();
const style = stylesheet.select('.my-class');

style.display = 'block';
style.padding = '1rem';
style.boxSizing = 'border-box';

const css = stylesheet.toString();
```

## Install

Using npm:

```sh
npm i @singleware/oss
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
