"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Testing = require("@singleware/testing");
const OSS = require("../source");
/**
 * Stylesheets, test case.
 */
let Styles = class Styles extends Testing.Case {
    /**
     * Test a stylesheet with one property.
     */
    testOneProperty() {
        const style = new OSS.Stylesheet();
        const test = style.select('.test', '.sub>.test');
        test.all = 'unset';
        this.areSame(style.toString(), '.test,.sub>.test{all:unset}');
    }
    /**
     * Test a stylesheet with two properties.
     */
    testTwoProperty() {
        const style = new OSS.Stylesheet();
        const test = style.select('.test', '.sub>.test');
        test.all = 'unset';
        test.color = 'white';
        this.areSame(style.toString(), '.test,.sub>.test{all:unset;color:white}');
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Styles.prototype, "testOneProperty", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Styles.prototype, "testTwoProperty", null);
Styles = __decorate([
    Class.Describe()
], Styles);
exports.Styles = Styles;
