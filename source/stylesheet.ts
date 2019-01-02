/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Style } from './style';

/**
 * Stylesheet class.
 */
@Class.Describe()
export class Stylesheet extends Class.Null {
  /**
   * Map of selectors.
   */
  @Class.Private()
  private selectorMap = new Map<string, Style>();

  /**
   * Gets the representative string of the specified style object.
   * @param style Style instance.
   * @returns Returns the representative string.
   */
  @Class.Private()
  private static getStyleCode(style: Style): string {
    let properties = '';
    for (const property in style) {
      const value = (<any>style)[property];
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
  @Class.Public()
  public select(...selectors: string[]): Style {
    const selector = selectors.join(',');
    if (!this.selectorMap.has(selector)) {
      this.selectorMap.set(selector, new Style());
    }
    return this.selectorMap.get(selector) as Style;
  }

  /**
   * Remove all styles from this object.
   */
  @Class.Public()
  public clear(): void {
    this.selectorMap.clear();
  }

  /**
   * Convert all styles in this object to its respective CSS code.
   * @returns Returns the CSS representation of this object.
   */
  @Class.Public()
  public toString(): string {
    let stylesheet = '';
    for (const [selector, style] of this.selectorMap) {
      stylesheet += `${selector}{${Stylesheet.getStyleCode(style)}}`;
    }
    return stylesheet;
  }
}
