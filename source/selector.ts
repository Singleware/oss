/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Style } from './style';

/**
 * Styles map interface.
 */
export interface Selector {
  [selector: string]: Style;
}
