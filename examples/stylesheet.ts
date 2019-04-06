/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as OSS from '../source';

const stylesheet = new OSS.Stylesheet();
const style = stylesheet.select('.my-class');

style.display = 'block';
style.padding = '1rem';
style.boxSizing = 'border-box';

console.log(stylesheet.toString());
