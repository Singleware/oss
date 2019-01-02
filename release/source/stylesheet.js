"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const style_1 = require("./style");
/**
 * Stylesheet class.
 */
let Stylesheet = Stylesheet_1 = class Stylesheet extends Class.Null {
    /**
     * Stylesheet class.
     */
    constructor() {
        super(...arguments);
        /**
         * Map of selectors.
         */
        this.selectorMap = new Map();
    }
    /**
     * Gets the representative string of the specified style object.
     * @param style Style instance.
     * @returns Returns the representative string.
     */
    static getStyleCode(style) {
        let properties = '';
        for (const property in style) {
            const value = style[property];
            if (value !== void 0) {
                const propertyName = property.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
                const propertyValue = value instanceof Array ? value.join(',') : value;
                properties += `${propertyName}:${propertyValue};`;
            }
        }
        return properties;
    }
    /**
     * Returns a new style for the specified selector path.
     * @param selectors Selectors path.
     * @returns Returns the style object.
     */
    select(...selectors) {
        const selector = selectors.join(',');
        if (!this.selectorMap.has(selector)) {
            this.selectorMap.set(selector, new style_1.Style());
        }
        return this.selectorMap.get(selector);
    }
    /**
     * Remove all styles from this object.
     */
    clear() {
        this.selectorMap.clear();
    }
    /**
     * Convert all styles in this object to its respective CSS code.
     * @returns Returns the CSS representation of this object.
     */
    toString() {
        let stylesheet = '';
        for (const [selector, style] of this.selectorMap) {
            stylesheet += `${selector}{${Stylesheet_1.getStyleCode(style)}}`;
        }
        return stylesheet;
    }
};
__decorate([
    Class.Private()
], Stylesheet.prototype, "selectorMap", void 0);
__decorate([
    Class.Public()
], Stylesheet.prototype, "select", null);
__decorate([
    Class.Public()
], Stylesheet.prototype, "clear", null);
__decorate([
    Class.Public()
], Stylesheet.prototype, "toString", null);
__decorate([
    Class.Private()
], Stylesheet, "getStyleCode", null);
Stylesheet = Stylesheet_1 = __decorate([
    Class.Describe()
], Stylesheet);
exports.Stylesheet = Stylesheet;
