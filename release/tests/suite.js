"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Testing = require("@singleware/testing");
const styles_spec_1 = require("./styles.spec");
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();
// Test cases.
suite.addCase(styles_spec_1.Styles);
(async function () {
    const report = await suite.perform();
    logger.print(report);
    process.exitCode = report.errors > 0 ? 1 : 0;
})();
