/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';

import * as OSS from '../source';

/**
 * Stylesheets, test case.
 */
@Class.Describe()
export class Styles extends Testing.Case {
  /**
   * Test a stylesheet with one property.
   */
  @Testing.Method()
  @Class.Public()
  public testOneProperty(): void {
    const style = new OSS.Stylesheet();
    const test = style.select('.test', '.sub>.test');
    test.all = 'unset';
    this.areSame(style.toString(), '.test,.sub>.test{all:unset}');
  }

  /**
   * Test a stylesheet with two properties.
   */
  @Testing.Method()
  @Class.Public()
  public testTwoProperty(): void {
    const style = new OSS.Stylesheet();
    const test = style.select('.test', '.sub>.test');
    test.all = 'unset';
    test.color = 'white';
    this.areSame(style.toString(), '.test,.sub>.test{all:unset;color:white}');
  }
}
