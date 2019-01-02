/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Style } from './style';
/**
 * Stylesheet class.
 */
export declare class Stylesheet extends Class.Null {
    /**
     * Map of selectors.
     */
    private selectorMap;
    /**
     * Gets the representative string of the specified style object.
     * @param style Style instance.
     * @returns Returns the representative string.
     */
    private static getStyleCode;
    /**
     * Returns a new style for the specified selector path.
     * @param selectors Selectors path.
     * @returns Returns the style object.
     */
    select(...selectors: string[]): Style;
    /**
     * Remove all styles from this object.
     */
    clear(): void;
    /**
     * Convert all styles in this object to its respective CSS code.
     * @returns Returns the CSS representation of this object.
     */
    toString(): string;
}
